var express = require('express');
var router = express.Router();
const moment=require('moment')


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: moment().calendar()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: moment().calendar()
  },
  {
    text: "Mini message board",
    user: "Emma",
    added: moment().calendar()
  },
  {
    text: "Local database",
    user: "Olivia",
    added: moment().calendar()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard',messages:messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Mini Messageboard',messages:messages });
});

router.post('/new', function(req, res, next) {
  messages.push({text:req.body.messagecontent,user:req.body.authorname,added:moment().calendar()});
  console.log(req.body)
  res.redirect('/')
});


module.exports = router;
