const express = require("express");
const router = express.Router();

const {
    createPost,
    getAllPost,
    getPostById,
    deletePost,
    updatePost,
    toggleLike
} = require("../controllers/postController");


// create post
router.post("/", createPost);

// get all posts
router.get("/", getAllPost);

// get single post
router.get("/:id", getPostById);

// delete post
router.delete("/:id", deletePost);

// update post
router.put("/:id", updatePost);

// like/unlike post
router.put("/:id/like", toggleLike);


module.exports = router;