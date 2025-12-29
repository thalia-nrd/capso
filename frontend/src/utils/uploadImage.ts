import axios from "axios";

const CLOUD_NAME = "dcgepz9ge";

interface CloudinarySignature {
  signature: string;
  timestamp: number;
  apiKey: string;
}

interface CloudinaryUploadResponse {
  secure_url: string;
  public_id: string;
}

export const uploadImageToCloudinary = async (
  image: File,
  frameId: string
): Promise<CloudinaryUploadResponse> => {
  // 1️⃣ Get signature from backend
  const sigRes = await axios.get<CloudinarySignature>(
    `http://localhost:5000/frame/${frameId}/polaroid/signature`,
    {
      params: {
        folder: "polaroid",
        upload_preset: "polaroid",
      },
      withCredentials: true,
    }
  );

  const { signature, timestamp, apiKey } = sigRes.data;

  // 2️⃣ Upload to Cloudinary
  const formData = new FormData();
  formData.append("file", image);
  formData.append("api_key", apiKey);
  formData.append("timestamp", timestamp.toString());
  formData.append("signature", signature);
  formData.append("folder", "polaroid");
  formData.append("upload_preset", "polaroid");

  const uploadRes = await axios.post<CloudinaryUploadResponse>(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    formData
  );

  return uploadRes.data;
};