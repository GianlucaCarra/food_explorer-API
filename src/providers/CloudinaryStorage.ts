import dotenv from "dotenv";
import { Readable } from "stream";
import { v2 as cloudinary, UploadApiErrorResponse, UploadApiResponse } from "cloudinary";

dotenv.config();

interface IResult {
  public_id: string;
  secure_url: string;
}

export class CloudinaryStorage {
  constructor() {
    if (!process.env.CLOUD_NAME || !process.env.API_KEY || !process.env.API_SECRET) {
      throw new Error("Missing Cloudinary configuration in environment variables.");
    }
    
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET
    });
  }

  private trySaveFile(fileStream: Readable): Promise<IResult> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "upload_portfolio" },
        (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
          if (error) { 
            reject(new Error(`Upload failed: ${error.message}`));
          } else if (result) {
            resolve({
              public_id: result.public_id,
              secure_url: result.secure_url
            });
          } else {
            reject(new Error('Unknown error occurred during upload.'));
          }
        }
      );
  
      fileStream.pipe(uploadStream);
    });
  }

  async saveFile(fileStream: Readable): Promise<{ publicID: string; imageURL: string }> {
    try {
      const result = await this.trySaveFile(fileStream);
      return {
        publicID: result.public_id,
        imageURL: result.secure_url
      };
    } catch (error) {
      console.error("Error saving file to Cloudinary:", error);
      throw new Error("Failed to save file to Cloudinary.");
    }
  }

  async deleteFile(publicId: string): Promise<void> {
    try {
      const result = await cloudinary.uploader.destroy(publicId);
      if (result.result !== "ok") {
        throw new Error(`Failed to delete file: ${result.result}`);
      }
    } catch (error) {
      console.error("Error deleting file from Cloudinary:", error);
      throw new Error("Failed to delete file from Cloudinary.");
    }
  }
}
