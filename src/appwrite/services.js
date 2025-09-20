import envconfig from "../envconfig/envconfig";
import { Client, ID, TablesDB, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  table;
  bucket;

  constructor() {
    this.client
      .setEndpoint(envconfig.appwriteEndpoint)
      .setProject(envconfig.appwriteProjectId);
    this.table = new TablesDB(this.client);
    this.bucket = new Storage(this.client);
  }

  async createDocument({ college, year, branch, course, image,description }) {
    try {
      return await this.table.createRow({
        databaseId: envconfig.appwriteDatabaseId,
        tableId: envconfig.appwriteTableId,
        rowId: ID.unique(),
        data: {
          college,
          year,
          branch,
          course,
          image,
          description 
        },
      });
    } catch (error) {
      console.log("Appwrite service :: createDocument :: error", error);
    }
  }

  async deleteDocument(Id) {
    try {
      await this.databases.deleteRow({
        databaseId: envconfig.appwriteDatabaseId,
        tableId: envconfig.appwriteTableId,
        rowId: Id,
      });
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteDocument :: error", error);
      return false;
    }
  }

  async getDocument(rowId){
    try {
      return await this.table.getRow({
        databaseId: envconfig.appwriteDatabaseId,
        tableId: envconfig.appwriteTableId,
        rowId:rowId,
      }

      )
    } catch (error) {
      console.log("Appwrite service :: getDocument :: error", error);
      
    }
  }

  async listDocuments(query){
    try {
      return await this.table.listRows({
        databaseId: envconfig.appwriteDatabaseId,
        tableId: envconfig.appwriteTableId,
        queries:[query]
      })
    } catch (error) {
      console.log("Appwrite service :: listDocuments :: error", error);
      
    }
  }

  //file upload services
  // bucket services (no need for updation B/c of new appwrite sdk)
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        envconfig.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(envconfig.appwriteBucketId, fileId);
      //   TODO: handle the case when file is not found
      // TODO:to see what to return and how to handle it further
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(envconfig.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite service :: getFilePreview :: error", error);
      
    }
    
  }
  
  getFileDownload(fileId) {
    try {
      return this.bucket.getFileDownload(envconfig.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite service :: getFileDownload :: error", error);
      
    }
  }
}

const service = new Service();
export default service;
