import multer from "multer";
import { CloudinaryStorage } from "@fluidjs/multer-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "employee_profiles",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 300, height: 300, crop: "fill" }],
  },
});

export const upload = multer({ storage });
