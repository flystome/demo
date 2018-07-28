var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/local');
// 用户
var usersSchema = new mongoose.Schema({
  username: String,
  password: String,
  isAdmin:{
    type: Boolean,
    default: false
  },
  time: {
    type: String,
    default: Date.now()
  }
});
// 分类
var categorySchema = new mongoose.Schema({
  title: String,
  time: {
    type: String,
    default: Date.now()
  }
});
// 文章
var articleSchema = new mongoose.Schema({
  title: String,
  category: String,
  author: {
    type: String,
    default: 'admin'
  },
  content: String,
  time: {
    type: String,
    default: Date.now()
  },
  views:{
    type: Number,
    default: 0
  },
  like:{
    type: Number,
    default: 0
  },
  comment: {
    type: Array,
    default: []
  }
});

var imgSchema = new mongoose.Schema({
  title: String,
  author: {
    type: String,
    default: 'admin'
  },
  src: {
    type: String,
    default: ''
  },
  belong1: {
    type: String,
    default: ''
  },
  belong2: {
    type: String,
    default: ''
  },
  see: {
    type: Number,
    default: 0,
  },
  sms: {
    type: Number,
    default: 0,
  },
  praise: {
    type: Number,
    default: 0,
  },
  creat: {
    type: Number,
    default: Date.now()
  }
});

Model = {
  User: mongoose.model('User', usersSchema),
  Category: mongoose.model('Category', categorySchema),
  Article: mongoose.model('Article', articleSchema),
  Img: mongoose.model('Img', imgSchema)
}
module.exports = Model
