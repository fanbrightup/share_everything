var formidable = require('formidable');
var http = require('http');
var util = require('util');
http.createServer((res,req)=>{
  if(req.url == '/upload'&&req.method.tolowerCase() == 'post'){
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = 'uploads/images/';
    form.keepExtensions = true;
    form.maxFieldsSize = 2*1024*1024;
    form.parse(req,(err,fields,files)=> {
      res.writeHead(200,{'content-type':'text/plain'});
      res.write('接收到了上传');
      res.end(util.inspect({fields:fields,files:files}));
  });
  return;
}
  res.writeHead(200,{'content-type':'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="upload">' +
    '</form>'
  );
}).listen(3000);
