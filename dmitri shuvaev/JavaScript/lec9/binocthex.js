
var convert = (function () {
   function valid(s){
       for(var i=0;i<s.length;i++){
        if ((s.charAt(i) < '0') || (s.charAt(i) > '1')) return false;
       }
       return true;
   }
    function hexBinary(s){
        var i=0;
        var hexaDecimal=[];
        var len=s.length;
        while(i<len)
       {
         switch(s[i])
         {
             case '0': hexaDecimal.push("0000"); break;
             case '1': hexaDecimal.push("0001"); break;
             case '2': hexaDecimal.push("0010"); break;
             case '3': hexaDecimal.push("0011"); break;
             case '4': hexaDecimal.push("0100"); break;
             case '5': hexaDecimal.push("0101"); break;
             case '6': hexaDecimal.push("0110"); break;
             case '7': hexaDecimal.push("0111"); break;
             case '8': hexaDecimal.push("1000"); break;
             case '9': hexaDecimal.push("1001"); break;
             case 'A': hexaDecimal.push("1010"); break;
             case 'B': hexaDecimal.push("1011"); break;
             case 'C': hexaDecimal.push("1100"); break;
             case 'D': hexaDecimal.push("1101"); break;
             case 'E': hexaDecimal.push("1110"); break;
             case 'F': hexaDecimal.push("1111"); break;
             case 'a': hexaDecimal.push("1010"); break;
             case 'b': hexaDecimal.push("1011"); break;
             case 'c': hexaDecimal.push("1100"); break;
             case 'd': hexaDecimal.push("1101"); break;
             case 'e': hexaDecimal.push("1110"); break;
             case 'f': hexaDecimal.push("1111"); break;
             default:  hexaDecimal.push("nInvalid hexadecimal digit ");
         }
         i++;
    }//while
        return hexaDecimal.join("");
    }

  return {
     
dec2bin: function(n)
{  
    if(!isNaN(n)){
           
    var b=2;
    var rslt=[];
    var digitPos=1;
    
    var num=(n < 0) ? -n : n;
    while (num>0)
    {
        rslt.push((num%b)*digitPos);
        num =parseInt(num/b);
      
    }
   
    if(n<0) return "-"+(rslt.reverse().join(""));
    else
    return rslt.reverse().join("");
    }else return "не число";
},
//Binary signed 2's
toBinary: function(num) { 
 if(!isNaN(num)){
  var number = num;
  var r=[];      
  var n=1;
  for(var i=0;i<=31;i++)
  {
    if(num&n==1)r.push("1");
    else r.push("0");
    num=num>>1;
  }
         return r.reverse().join("");
       }else return "не число";
    
},
dec2oct: function(n)
{  
    if(!isNaN(n)){   
    var b=8;
    var rslt=[];
    var digitPos=1;
    
    var num=(n < 0) ? -n : n;
    while (num>0)
    {
        rslt.push((num%b)*digitPos);
        num =parseInt(num/b);    
    }
   
    if(n<0) return "-"+(rslt.reverse().join(""));
    else
    return rslt.reverse().join("");
    }else return "не число";
},
dec2hex:function(s){
   //
     if(!isNaN(s)){  
          var n=s;
          var result=[];
          var l = "0123456789ABCDEF";
          var o=0;
          if(s<0){
           var conter=16;
          while(conter>0){
              if(conter%4==0)result.push(" ");
              o=n& 0x0f;
            if(o>=0&&o<l.length)
            result.push(l[o]);
          n>>=4; 
              conter--;
          }  
          }else{
            while(n>0){
              o=n& 0x0f;
            if(o>=0&&o<l.length)
            result.push(l[o]);
          n>>=4; 
            
          }     
          }
  
         return result.reverse().join(""); 
          }else return "не число";
  },
  //
      
bin2dec: function(num){
      if(valid(num)){  
          var val=0;
          for(var i=0;i<num.length;i++)
              {
                val=val<<1;
                if(num[i]=='1')val+=1;
              }
          return val;
           }else return "не число";
      },
oct2dec:function(n){
       if(!isNaN(n)){
       for(var i=0;i<n.length;i++){
        if ((n.charAt(i) < '0') || (n.charAt(i) > '7')) return "число должно быть больше 0 и меньше 8";
       }
          var i=0;
         var octnum=n; 
          var decnum=0;
      	while(octnum!=0)
	   {
		decnum = decnum + (octnum%10) * Math.pow(8, i);
		i++;
		octnum=parseInt(octnum/10);
	    }
          return decnum;
        }else return "не число";
  },
//
hex2dec:function(hex)
{
  
 return  this.bin2dec(hexBinary(hex));
    
},
      
  }
})();
//
var text= document.getElementById("h2b");
let dn="1";
text.innerHTML="<br/>из десятичной системы счисления в двоичную->"+convert.dec2bin(dn)+"<br/>signed->"+convert.toBinary(dn);
var textoct= document.getElementById("h2oct");
textoct.innerHTML="из десятичной в восьмеричную->"+convert.dec2oct(255);
var texthex= document.getElementById("h2hex");
texthex.innerHTML="из десятичной в шестнадцатиричную->"+convert.dec2hex("2556");
var textbdec= document.getElementById("h2bdec");
textbdec.innerHTML="из двоичной в десятичную->"+convert.bin2dec("01100100");//"‭1111111111111111111111111111111111111111111111111111111111111110"
var textoctdec= document.getElementById("h2octdec");
textoctdec.innerHTML="из восьмеричной в десятичную->"+convert.oct2dec("77");
var texthextdec= document.getElementById("h2hexdec");
texthextdec.innerHTML="из шестнадцатиричной в десятичную->"+convert.hex2dec("AD");