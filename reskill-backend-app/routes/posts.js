var express = require('express');
var router = express.Router();
const cors = require('cors');
const postController = require('../controller/postController');

router.use(cors());

/* GET posts listing. */
router.get('/', function(req, res, next) {
  const posts = new postController();
  posts.returnPosts(req, res);
});

/* Get single Post. */
router.get('/:id', function(req, res, next) {
  const posts = new postController();
  posts.returnPostsById(req, res);
});

module.exports = router;
