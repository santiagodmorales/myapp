const express = require('express');
const postRouter = express.Router();
const Post = require('../models/post.model'); // post model

/* Get all Posts */
postRouter.get('/', (req, res, next) => {
  Post.find({})
    .then((result) => {
      res.status(200).send({
        success: true,
        data: result,
      });
    })
    .catch((error) => {
      res.status(400).send({
        success: false,
        error: error.message,
      });
    });
});

/* Get Single Post */
postRouter.get("/:post_id", (req, res, next) => {
  Post.findById(req.params.post_id)
    .then((result) => {
      res.status(200).send({
        success: true,
        data: result,
      });
    })
    .catch((error) => {
      res.status(400).send({
        success: false,
        error: error.message,
      });
    });
});


/* Add Single Post */
postRouter.post("/", (req, res, next) => {
  let newPost = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  };
  Post.create(newPost)
    .then((result) => {
      res.status(201).send({
        success: true,
        data: result,
        message: "Post created successfully",
      });
    })
    .catch((error) => {
      res.status(400).send({
        success: false,
        error: error.message,
      });
    });
});

/* Edit Single Post */
postRouter.patch("/:post_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  Post.findByIdAndUpdate(req.params.post_id, { $set: fieldsToUpdate }, { new: true })
    .then((result) => {
      res.status(200).send({
        success: true,
        data: result,
        message: "Post updated successfully",
      });
    })
    .catch((error) => {
      res.status(400).send({
        success: false,
        error: error.message,
      });
    });
});

/* Delete Single Post */
postRouter.delete("/:post_id", (req, res, next) => {
  Post.findByIdAndDelete(req.params.post_id)
    .then((result) => {
      res.status(200).send({
        success: true,
        data: result,
        message: "Post deleted successfully",
      });
    })
    .catch((error) => {
      res.status(400).send({
        success: false,
        error: error.message,
      });
    });
});

module.exports = postRouter;
