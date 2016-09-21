var express = require('express');
var router = express.Router();
var fs = require('fs');
var formidable = require('formidable');
var util = require('util');
var bodyParser = require('body-parser');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('fanbright.ejs',{title:'fanbright'});
});
router.get('/blog',function(req,res,next){
  res.render('blog.ejs');
})
router.get('/show',function(req,res,next){
//  文件名要加public,否则找不到,很奇怪
    var dirname = 'public/fanbrightFile';
    var files = fs.readdirSync(dirname);
    // console.log(files);
    res.send(files);
});
//  文本上传路由
router.post('/textUpload',(req,res)=>{
    console.log(req.body);
    if(!req.body.textName || !req.body.textContent) {
      res.send('文件名与文件内容不能为空');
    }else{

    var textName = req.body.textName;
    var textContent = req.body.textContent;
    var fileLocation = 'public/fanbrightFile/'+textName;
    fs.appendFile(fileLocation,textContent,(err)=>{
      if(err) throw err;
      console.log("This file can't append");
    });
    res.send('文件已上传'+'<br>'+'textName: '+textName+'<br>'+'textContent: '+textContent);
  }

})
//  文件上传路由
router.post('/upload',(req,res)=>{
    // var form = new formidable.IncomingForm();
    // form.encoding = 'utf8';
    // form.uploadDir = '/public/fanbrightFile/';
    // form.keepExtensions = true;
    // form.maxFieldsSize = 2*1024*1024;
    // form.parse(req,(err,fields,files)=> {
    //   // fs.renameSync(files.upload.path,"/fanbrightFile/");
    //   res.writeHead(200,{'content-type':'text/plain'});
    //   res.write('received');
    //   res.end(util.inspect({fields:fields,files:files}));
    // });
    // return ;
    var obj ={};
    var form = new formidable.IncomingForm({
       encoding:"utf-8",
       uploadDir:"public/fanbrightFile",  //文件上传地址
       keepExtensions:true  //保留后缀
   });
   form.parse(req)
       .on('field', function(name, value) {  // 字段
           obj[name] = value;
       })
       .on('file', function(name, file) {  //文件
           obj[name] = file;
       })
       .on('error', function(error) {  //结束
          //  callback(error);
          console.log('error');
       })
       .on('end', function() {  //结束
          //  callback(null,obj);
          console.log('end');
       });

    res.end('hhhhhhhhhh');
      // res.end();
  });
  //  显示一个文件
module.exports = router;
