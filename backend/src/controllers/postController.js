const Post = require("../models/Post");


// create post
const createPost = async (req, res) => {

    try {

        const post = await Post.create(req.body);

        res.status(201).json(post);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// get all posts
const getAllPost = async (req, res) => {

    try {

        const posts = await Post.find()
            .populate("author");

        res.json(posts);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// get post by id
const getPostById = async (req, res) => {

    try {

        const post = await Post.findById(req.params.id)
            .populate("author");

        res.json(post);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// update post
const updatePost = async (req, res) => {

    try {

        const post = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(post);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// delete post
const deletePost = async (req, res) => {

    try {

        await Post.findByIdAndDelete(req.params.id);

        res.json({
            message: "Post Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// like / unlike post
const toggleLike = async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        const userId = req.body.userId;


        if(post.likes.includes(userId)){

            post.likes = post.likes.filter(
                id => id.toString() !== userId
            );

        }else{

            post.likes.push(userId);

        }


        await post.save();

        res.json(post);


    } catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



module.exports = {
    createPost,
    getAllPost,
    getPostById,
    updatePost,
    deletePost,
    toggleLike
};