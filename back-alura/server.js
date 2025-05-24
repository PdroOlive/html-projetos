import express from "express";
import { routes } from "./src/routes/posts-routes.js";

// Create an Express application
const app = express();
app.use(express.static("uploads"));
routes(app)

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Hello, World! Server is Running");
});





// function searchPosts(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id)
//     })
// }

// app.get("/posts/:id", (req, res) => {
//     const index = searchPosts(req.params.id) // Criando uma rota (URL) para pesquisar um item individualmente
//     res.status(200).json(posts[index])
// })
