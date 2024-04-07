var express = require('express');
var router = express.Router();
const connectToDB = require('./app');
const Post = require('../modules/Post');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
// let messagesDB = [];
connectToDB().catch((err)=> console.log(err));


async function createPost(text, user) {
  const post = new Post({text, user});
  await post.save();
  console.log('Post saved');
}

Post.deleteMany({text:"hello"}).then(() => {
  console.log('Posts deleted');
  getPosts();
}
).catch((err) => console.log(err));

async function getPosts() {
  messagesDB = await Post.find();
  console.log('Posts retrieved');
  console.log(messagesDB)
}


// messages.forEach((message) => {
//   // createPost(message.text, message.user).catch((err) => console.log(err));
//   console.log('Post created');
// }
// );

// getPosts().catch((err) => console.log(err));

/* GET home page. */
router.get('/', function(req, res, next) {
  Post.find().then((posts) => {
    res.render('index', { title: 'Mini Messageboard', messages: posts});
    console.log(posts[1].added)
    console.log(posts)
  });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'new' });
});

router.post('/new', function(req, res, next) {
  createPost(req.body.text, req.body.user);
  // getPosts()
  // messages.push({text: req.body.message, user: req.body.user, added: new Date()});
  res.redirect('/');
}
);


module.exports = router;
