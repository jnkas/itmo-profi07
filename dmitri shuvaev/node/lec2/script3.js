var fs =require("fs");  // file system

var data= fileread("1/data.txt");

var dt=data.toString();

var res = dt.split(" ");
for (var i=0; i<res.length; i++)
{
    res[i] = parseInt(res[i], 10);
}
function filewrite(filename,data){

 fs.writeFile(filename, data, (err) => {
  if (err)  throw err;
  console.log('The file has been saved!');
});  

}
function fileread(filename){

    var contents= fs.readFileSync(filename);
    return contents;
}


function conTwo(){
    var re="";
    for(var i=0;i<res.length;i++){
        var temp=res[i]%2;
        if(temp==0){
            re+=res[i]; 
             re+=" ";
        }
         
    }
    return re;
}
function conPow(){
    var re="";
    for(var i=0;i<res.length;i++){
        var temp=Math.pow(res[i], 3);     
            re+=temp; 
             re+=" ";        
    }
    return re;
}

 filewrite('1/out-1.txt',conTwo());
 filewrite('1/out-2.txt',conPow());   


