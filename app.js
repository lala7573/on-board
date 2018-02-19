var express = require('express');
var mysql = require('mysql');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var pool = mysql.createPool({
  host: 'localhost',
  user : 'root',
  password:'1234',
  database: 'board'
});

app.use(bodyParser.urlencoded({extended: false}));


router.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html');
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
