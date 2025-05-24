import { ObjectId } from "mongodb";
import connectionBase from "../config/db-config.js";


// Establish a database connection using the provided connection string
const connection = await connectionBase(process.env.STRING_CONNECTION);

// Asynchronous function to fetch all posts from the database
export async function getAllPosts() {
    // Connect to the "back-for-Insta" database
    const db = connection.db("back-for-Insta");
    // Select the "posts" collection
    const collection = db.collection("posts");
    // Find and return all documents as an array
    return collection.find().toArray();
}

export async function createContent(newContent) {
    const db = connection.db("back-for-Insta");
    const collection = db.collection("posts");
    return collection.insertOne(newContent)
}

export async function handleUpdatedPost(id, updatedContent) {
    const db = connection.db("back-for-Insta");
    const collection = db.collection("posts");
    const objectId = ObjectId.createFromHexString(id)
    return collection.updateOne({_id: new ObjectId(objectId)}, {$set: updatedContent})
}