import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dg6d7syt2",
  api_key: "172119216882182", // Ensure API key is enclosed in quotes as a string
  api_secret: "xuR1aMO3IpBdtjMjmGot3LQk_9k",
});

export const cloudinaryUploadImage = async (fileUpload: any) => {
  try {
    const data = await cloudinary.uploader.upload(fileUpload, {
      resource_type: "auto",
    });
    return { url: data.secure_url };
  } catch (error) {
    return error;
  }
};
