var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/myfile',function(req,res,next){
  res.render('myfile',{title:'myfile'});
})

module.exports = router;
