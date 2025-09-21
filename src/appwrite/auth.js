import envconfig from "../envconfig/envconfig";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(envconfig.appwriteEndpoint)
      .setProject(envconfig.appwriteProjectId)
      .setDevKey(envconfig.appwriteDevKey);

    this.account = new Account(this.client);
  }

  async createAccount(email, password) {
    try {
      // Step 1: Create account
      await this.account.create(ID.unique(), email, password);

      // Step 2: Create a session for the user
      await this.account.createEmailPasswordSession(email, password);

      // Step 3: Send verification email
      await this.startVerification();

      console.log(
        "Signup successful! Please check your email for verification link."
      );
    } catch (error) {
      console.log("Appwrite Error: createAccount", error);
      throw error;
    }
  }

  async startVerification() {
    try {
      await this.account.createVerification("http://localhost:5173/verify"); //TODO: change this URL to your frontend URL
      console.log("verification email sent successfully");
    } catch (error) {
      console.log("Appwrite service :: startVerification :: error", error);
    }
  }

  async completeVerification(userId, secret) {
    try {
      return await this.account.updateVerification(userId, secret);
    } catch (error) {
      console.log("Appwrite service :: completeVerification :: error", error);
    }
  }

  async login(email, password) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite service :: login :: error", error);
      throw error; // Re-throw the error for the UI to handle
    }
  }

  async getcurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
      return null;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
  }

  async oAuth2Login() {
    try {
      this.account.createOAuth2Session(
        "google",
        "http://localhost:5173/verify",
        "http://localhost:5173/failed"
      );
    } catch (error) {
      console.log("Appwrite service :: oAuth2Login :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
