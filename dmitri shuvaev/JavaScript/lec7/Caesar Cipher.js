var alphabet = ["А","Б","В","Г","Д","Е","Ё","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я"];

//=============================================
function CaesarCipher(text,shift){
    res="";
    for(var i=0;i<text.length;i++){
        var ch=text.charCodeAt(i);//git number
        if(ch>=65&&ch<=90){
            ch=ch+shift;
            if(ch<65){
                ch=ch+26;
            }
            res+=String.fromCharCode((ch-65)%26+65);   
        }
        else if(ch>=97&&ch<=122){
            ch=ch+shift;
            if(ch<97){
                ch=ch+26;
            }
          res+=String.fromCharCode((ch-97)%26+97);    
        }
        //UTF-8 Cyrillic
        else if((ch>=1040&&ch<=1071)||ch===1025){//Ё1025 ё1105
            res+= convert(text[i],shift);
            
        }
        else if((ch>=1072&&ch<=1103)||ch===1105){//Ё1025 ё1105
            res+= (convert(text[i].toUpperCase(),shift)).toLowerCase();
            
        }
       //
        else res+=text[i];

        
    }
    return res;
}
function convert(charv,shift){
    var index=0;
    var len=alphabet.length;
    for(var i=0;i<len;i++){
        if(charv===alphabet[i]){
            index=i;
        }
    }
    index=index+shift;
    if(index<0){
       index=(len)+index;
    }
  return alphabet[index%33];
}
var siphertext="абя";
siphertext=CaesarCipher(siphertext,5);
document.write("<br/>Cipher: "+siphertext);
siphertext=CaesarCipher(siphertext,-5);
document.write("<br/>Cipher: "+siphertext);
//
siphertext="The cleaner and nicer the program, the faster it's going to run. And if it doesn't, it'll be easy to make it fast.";
siphertext=CaesarCipher(siphertext,13);
document.write("<br/>Cipher: "+siphertext);
siphertext=CaesarCipher(siphertext,-13);
document.write("<br/>Cipher: "+siphertext);
//
siphertext="There is no programming language, no matter how structured, that will prevent programmers from making bad programs.";
siphertext=CaesarCipher(siphertext,25);
document.write("<br/>Cipher: "+siphertext);
siphertext=CaesarCipher(siphertext,-25);
document.write("<br/>Cipher: "+siphertext);