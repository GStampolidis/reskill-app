const Photo = require("../models/photo");

class Post {
  constructor(id, title, userId, body, photo) {
    this.id = id;
    this.title = title;
    this.userId = userId;
    this.body = body;
    this.photo = photo;
  }
}

module.exports = Post;
