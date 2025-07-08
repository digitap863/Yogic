// import multer from "multer";

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now()
//         cb(null, uniqueSuffix + file.originalname)
//     }
// })

// // const storage = multer.memoryStorage()

// export const upload = multer({ 
//     storage: storage,
//     limits: {
//       fieldSize: 15 * 1024 * 1024 // Set the limit to 15MB, for example
//     }
//   });
/////////////////////////////////////////////////////////////////////////////////////


// import multer from 'multer';
// import { CloudinaryStorage } from 'multer-storage-cloudinary';
// import cloudinary from '../config/cloudinary.mjs'

// // Set up Cloudinary storage
// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: 'yogic', // Specify the folder name in Cloudinary
//         allowed_formats: ['jpeg', 'png', 'jpg'], // Restrict file types
//     },
// });

// // Configure multer to use Cloudinary storage
// export const upload = multer({ 
//     storage: storage,
//     limits: {
//       fieldSize: 20 * 1024 * 1024 
//     }
//   });




///////////////////////////////////////////////////////////////////////////////////




import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import '../config/cloudinary.mjs';

// Simple memory storage
const memoryStorage = multer.memoryStorage();

// Basic multer configuration
export const upload = multer({ 
  storage: memoryStorage,
  limits: { fileSize: 20 * 1024 * 1024 } // 20MB
});

// Simplified upload function (similar to your example)
export const uploadToCloudinary = async (file) => {
  if (!file) return "";
  
  try {
    const base64String = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
    
    const uploadResponse = await cloudinary.uploader.upload(base64String, {
      folder: "yogic",
      resource_type: "auto",
      allowed_formats: ['jpeg', 'png', 'jpg','webp']
    });

    return uploadResponse.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return "";
  }
};