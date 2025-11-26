const cloudinary = require('cloudinary').v2;

cloudinary.config({
  secure: true,
});

const generateUploadSignature = (folder: string, preset: string) => {
  const timestamp = Math.floor(Date.now() / 1000);

  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder, upload_preset: preset },
    process.env.CLOUDINARY_API_SECRET
  );

  return { signature, timestamp, upload_preset: preset, folder };
};

module.exports = { generateUploadSignature };