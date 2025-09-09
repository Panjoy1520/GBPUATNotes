import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../appwrite/auth";

// app is started and checking for session (cookie)
export const initAuth = createAsyncThunk(
  "auth/initauth",
  async (_, { rejectWithValue }) => {
    try {
      const user = await authService.getcurrentUser();
      if(user){
        return {
        id: user.$id,
        email: user.email,
        verified: user.emailVerification,
      };
      }
      return null;
    } catch (error) {
      console.log("Error in initauth thunk:", error);
      // return rejectWithValue("No session found");
    }
  }
);

//signup 

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // We call the createAccount service, which handles the entire signup flow
      // (creating user, sending verification, and logging out).
      const newAccount = await authService.createAccount(email, password);
      
      if (newAccount) {
        // If signup is successful, we don't need to return user data because
        // they still need to verify their email. We just return a success state.
        return { success: true };
      }

    } catch (error) {
      // If Appwrite throws an error (e.g., "A user with the same email already exists"),
      // we catch it and send it as the payload for the rejected action.
      console.log("Error in signupUser thunk:", error);
      return rejectWithValue(error.message);
    }
  }
);

// login thunk where verification is also checked
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ( {email, password} , { rejectWithValue }) => {
    try {
      await authService.login(email, password);

      await new Promise(resolve => setTimeout(resolve, 100));


      // fetch user details
      const user = await authService.getcurrentUser();
       if (!user) {
        // If user is null, we can't proceed. Log out to be safe.
        await authService.logout(); 
        console.error("Login failed: Could not retrieve user session after login attempt.");
        return rejectWithValue("Failed to retrieve user session.");
      }

      console.log("User successfully retrieved:", user.email);

      if (!user.emailVerification) {
        await authService.logout();
        console.log("Email not verified. Please verify your email before logging in.");
        
        return rejectWithValue(
          "Email not verified. Please verify your email before logging in."
        );
      }

      return {
        id: user.$id,
        email: user.email,
        verified: user.emailVerification,
      };

    
    } catch (error) {
      console.log("Error in loginUser thunk:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await authService.logout();
  return true;
});

// ----------------------slices----------------------

const initialState = {
  user: null,
  isAuthenticated: false,
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // initAuth
    builder
      .addCase(initAuth.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(initAuth.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(initAuth.rejected, (state, action) => {
        state.status = "idle"; // no session -> normal idle state
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload === "NO_SESSION" ? null : action.payload;
      });

      //signup hi ni tha
      builder
      .addCase(signupUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; 
      });

    // loginUser
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.isAuthenticated = false;
        state.user = null;
      });

    // logoutUser
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.status = "idle";
      state.error = null;
    });
  },
});

export default authSlice.reducer;

export const selectAuth = (state) => state.auth;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;