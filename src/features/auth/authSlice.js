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

// login thunk where verification is also checked
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ( {email, password} , { rejectWithValue }) => {
    try {
      await authService.login(email, password);

      await new Promise(resolve => setTimeout(resolve, 100));


      // fetch user details
      const user = await authService.getcurrentUser();
      console.log(user.email);
      

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