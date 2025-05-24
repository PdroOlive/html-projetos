import express from "express";
import multer from "multer";
import cors from "cors";
import { handleRequestAndResponse, shareContent, updatedNewPost, uploadImages } from "../controls/posts-controls.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
} 

// Configure disk storage for multer
const storage = multer.diskStorage({
  // Specify the destination directory for uploaded files
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Set the destination to the 'uploads' directory
  },

  // Specify the filename for uploaded files
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename
  }
});

const upload = multer({dest:"./uploads", storage})

export function routes(app) {
    // Middleware to parse JSON request bodies
    app.use(express.json());
    app.use(cors(corsOptions))
    // Define a GET route to handle requests to the "/posts" endpoint
    app.get("/posts", handleRequestAndResponse);
    // Define a POST route to handle creates to the "/posts" endpoint
    app.post("/posts", shareContent)
    app.post("/upload", upload.single("image"), uploadImages)
    app.put("/upload/:id", updatedNewPost)
} 
