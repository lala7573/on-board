var express = require('express');
var mysql = require('mysql');
var path = require('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var app = express();
var router = express.Router();
var pool = mysql.createPool({
  host: 'localhost',
  user : 'root',
  password:'1234',
  database: 'board'
});

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));


router.get('/', function (req, res) {
  //res.sendFile(__dirname+'/index.html');
  pool.getConnection(function(err, connection){
    connection.query('SELECT * FROM posts', function(err, rows, fields){
      if (err) throw err;
      console.log(rows);
      obj = {print: rows};
      res.render('index', obj);
  })
});
});

router.get('/add', function (req, res) {
  res.sendFile(__dirname+'/add.html');
});
router.post('/add', function(req, res){
  var post = {'contents':req.body.contents};
  res.send('hi ' + post.contents);
  pool.getConnection(function(err, connection){
    connection.query('INSERT INTO posts set ?',post, function(err, results, fields){
      connection.release();
      if(err) throw err;

    });
  });
});


app.use('/', router);
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
