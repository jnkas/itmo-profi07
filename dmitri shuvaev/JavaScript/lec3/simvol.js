var str="character";
var c='h';

//
var s1='';
for(var i=0;i<str.length;i++){
    s1+=str[i];
    if(str[i]==c){s1+=c;}
}
//
document.write(s1);
for(var i=0;i<s1.length;i++)
//document.write(s1[i]);
