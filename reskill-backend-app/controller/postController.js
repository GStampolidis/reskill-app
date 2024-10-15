var Photo = require("../models/photo");
const Post = require("../models/post");
const axios = require("axios");

class postController {
  returnPosts(req, res) {
    axios
      .all([
        axios.get("https://jsonplaceholder.typicode.com/photos?_limit=9"),
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=9"),
      ])
      .then(
        axios.spread((photosResponse, postsResponse) => {
          let photos = photosResponse.data.map(
            (item) =>
              new Photo(
                item.id,
                item.albumId,
                item.title,
                item.url,
                item.thumbnailUrl
              )
          );

          let posts = postsResponse.data.map((item) => {
            let photo = photos.find((photo) => photo.id === item.id);
            return new Post(item.id, item.title, item.userId, item.body, photo);
          });
          res.send(posts);
        })
      )
      .catch((error) => {
        res.status(500).send("An error occurred:" + error);
      });
  }

  returnPostsById(req, res) {
    axios
      .all([
        axios.get(
          `https://jsonplaceholder.typicode.com/posts/${req.params.id}`
        ),
        axios.get(
          `https://jsonplaceholder.typicode.com/photos/${req.params.id}`
        ),
      ])
      .then(
        axios.spread((postResponse, photoResponse) => {
          let post = new Post(
            postResponse.data.id,
            postResponse.data.title,
            postResponse.data.userId,
            postResponse.data.body,
            new Photo(
              photoResponse.data.id,
              photoResponse.data.albumId,
              photoResponse.data.title,
              photoResponse.data.url,
              photoResponse.data.thumbnailUrl
            )
          );
          res.send(post);
        })
      )
      .catch((error) => {
        res.status(500).send("An error occurred:" + error);
      });
  }
}

module.exports = postController;
