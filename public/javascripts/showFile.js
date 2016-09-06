// function show_myfile(dirname){
//   var files = fs.readdirSync(dirname);
//   // var files = fs.readdirSync('../images/');
//   for(let name in files){
//     console.log(files[name]);
//   }
// }
//  show_myfile('/home/my/Desktop/August/share_everything/public/images');
// show_myfile('../images');


function show_my_file(dirname){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status==200){
      var obj = JSON.parse(xhr.responseText);
      console.log(typeof obj);
      console.log(obj);
      console.log(JSON.stringify(obj));
      // console.log(xhr.responseText);
      // var files = xhr.responseText.split(/\"([^\"]*)\"/g);
      // 以引号为界分割成数组,后边通过if验证来拿到想要的文件名
      var files = xhr.responseText.split('"');

      // console.log('sdfsdf'+str);
      // console.log(files);
      var data = '';
      // var selected= new Array();
      // for(let i=0;i<files.length;i++){
      //   if(files[i] == '[' ||files[i] == ']' || files[i] == ',') continue;
      //    selected.push(files[i]);
      // }
      var selected = obj;
      for(let i = 0;i < selected.length;i++){
        if(i%3 == 0) data+='<br>';
        //  地址images前要加/
        data +=('<a href=/fanbrightFile/'+ selected[i]+
                ' download='+selected[i] +'>'+selected[i]+'</a>'+'    ');
      }
      myfileDiv.innerHTML=data;
    }
  }
  xhr.open('GET','/fanbright/show');
  // xhr.open('GET','http://localhost:3000/texts/1.txt');
  xhr.send();
var myfileDiv = document.getElementById('myfileDiv');

}
//  预览
function show_my_article(){
    var p_article_place = document.getElementById('p_article_place');
    p_article_place.innerHTML = 'heheh';
}
