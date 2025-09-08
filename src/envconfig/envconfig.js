const envconfig = {
        appwriteEndpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
        appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
        appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
        appwriteTableId: String(import.meta.env.VITE_APPWRITE_TABLE_ID),
        appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
        appwriteDevKey: String(import.meta.env.VITE_APPWRITE_DEV_KEY),
}
export default envconfig;
