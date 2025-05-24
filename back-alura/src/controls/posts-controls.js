import fs from "fs"
import { getAllPosts, createContent, handleUpdatedPost } from "../models/posts-models.js";
import generativeDescription from "../services/gemini-services.js";

export async function handleRequestAndResponse(req, res) {
    // Fetch all posts
    const result = await getAllPosts();
    // Send the fetched posts as a JSON response with a 200 OK status code
    res.status(200).json(result);
}

export async function shareContent(req, res) {
    const contentShared = req.body;
    try {
        const contentCreated = await createContent(contentShared);
        res.status(200).json(contentCreated)
    }
    catch(error) {
        console.error(error.message);
        res.status(500).json({"Error":"Falha na requisição"})
    }

}

// Export an asynchronous function to handle image uploads
export async function uploadImages(req, res) {
    // Create an object to store content information
    const contentShared = {
      descricao: "", // Description of the content
      imgUrl: req.file.originalname, // Original name of the uploaded image
      alt: "" // Alternative text for the image
    };
  
    try {
      // Create the content in the database
      const contentCreated = await createContent(contentShared);
  
      // Construct the new file path for the uploaded image
      const updatedImage = `uploads/${contentCreated.insertedId}.png`;
  
      // Rename the uploaded file to the new path
      fs.renameSync(req.file.path, updatedImage);
  
      // Send a successful response with the created content
      res.status(200).json(contentCreated);
    } catch (error) {
      // Log the error message to the console
      console.error(error.message);
  
      // Send an error response indicating a failure
      res.status(500).json({ "Error": "Falha na requisição" });
    }
}

export async function updatedNewPost(req, res) {
    const id = req.params.id;
    const urlImage = `http://localhost:3000/${id}.png`;
    
    try {
        const imageBuffer = fs.readFileSync(`uploads/${id}.png`)
        const description = await generativeDescription(imageBuffer)
        const updatedPost = {
            imgUrl: urlImage,
            descricao: description,
            alt: req.body.alt
        }
        const contentCreated = await handleUpdatedPost(id, updatedPost);
        res.status(200).json(contentCreated)
    }
    catch(error) {
        console.error(error.message);
        res.status(500).json({"Error":"Falha na requisição"})
    }

}
