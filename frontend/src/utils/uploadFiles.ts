import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "";

const CLOUD_NAME = "dcgepz9ge";

interface CloudinarySignature {
  signature: string;
  timestamp: number;
  apiKey: string;
  folder: string;
  upload_preset: string;
}

interface CloudinaryUploadResponse {
  secure_url: string;
  public_id: string;
}

export const uploadFileToCloudinary = async (
  file: File,
  frameId: string
): Promise<CloudinaryUploadResponse> => {

  // 1️⃣ Request signature from backend
  const sigRes = await axios.get<CloudinarySignature>(
    `${API_URL}/frame/key/signature`,
    {
      params: {
        folder: "key_items",            // MUST MATCH BACKEND
        upload_preset: "key_items",
        frameId,
      },
      withCredentials: true,
    }
  );

  const { signature, timestamp, apiKey, folder, upload_preset } = sigRes.data;

  // 2️⃣ Upload file → Cloudinary
  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", apiKey);
  formData.append("timestamp", timestamp.toString());
  formData.append("signature", signature);
  formData.append("folder", folder);
  formData.append("upload_preset", upload_preset);
  formData.append("resource_type", "raw");

  const uploadRes = await axios.post<CloudinaryUploadResponse>(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`,
    formData
  );

  return uploadRes.data;
};