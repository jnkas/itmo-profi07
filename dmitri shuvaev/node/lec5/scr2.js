function Calc() {
     this.isBraces = function(char){
           var braces = ["(", ")"];
        if(braces.indexOf(char) != -1){
            return true;
        }
        return false;
    };
     this.convert2Tokens = function(inputStr){
           var infixAsToken = [];
           var temp = "";
        //
        if((inputStr.charAt(0) == "+") || (inputStr.charAt(0) == "-")){
            inputStr = "0" + inputStr;
        }
        
        //
        for(var i=0; i<inputStr.length; i++){

            if (this.isAnOperator(inputStr.charAt(i)) || this.isBraces(inputStr.charAt(i))){
                if(temp.length !== 0){
                    infixAsToken.push(temp);
                    temp = "";
                }
                infixAsToken.push(inputStr.charAt(i));
                continue;
            }
          
            if(inputStr.charAt(i) == "."){
                temp = temp + ".";
                continue;
            }
           
            if(!isNaN(inputStr.charAt(i))){
                temp = temp + inputStr.charAt(i);
                continue;
            }
        }//loop ends
        
        
        if(temp.length !== 0){
            infixAsToken.push(temp);
            temp = "";
        }
       return infixAsToken;     
    };
    

 this.convert=function( str){
  var stack = [];
  //var st=   str.split(' ').join('');
   //st = st.split("");
 var st = this.convert2Tokens(str);
    var result=[];
    for(var i=0;i<st.length;i++){
      if (this.operator(st[i])) {
        if(")"===st[i]) {
         while (stack.length > 0 && ("("!=stack[stack.length-1]))
         {
       
         result.push(stack.pop());
      
         }
         if (stack.length > 0)
          {
             stack.pop();
          }
        }else{
            if (stack.length > 0 && !(this.isLowerPrecedence(st[i], stack[stack.length-1]))){
                    stack.push(st[i]);
                }else{
            while(stack.length > 0 && (this.isLowerPrecedence(st[i], stack[stack.length-1])))
            {
                 let top = stack.pop(); 
                if ("("!==top)
                  {
                  
                    result.push(top);
                 
                  }
            }
                 stack.push(st[i]);    
                }
        }   
      }
        else{
         
         result.push(st[i]);
        
        }
    }
        while (stack.length > 0) {
         result.push(stack.pop());
               
      
    }
     console.log(result);
        return result;
}

this.operator=function( s) {
  if("%"===s || "+"===s || "-"===s || "*"===s || "/"===s || "^"===s || "("===s || ")"===s){
        return true;
}else return false;
}
  this.isLowerPrecedence=function( s,  s1) {
    switch (s) {
    case "+":
            return!("+"===s1 || "("===s1);
       
    case "-":
            return!("-"===s1 || "("===s1);

    case "*":
            if("%"===s1 || "/"===s1 || "^"==(s1) || "("===s1)return true;
    case "/":
            if("%"===s1 ||"*"===s1 || ("^"===s1) || "("===s1)  return true;
    case "%" : if("/"===s1 || "*"===s1 || ("^"===s1) || "("===s1)  return true;

    case "^":
            if("("===s1)
        return true;

    case "(":
        return false;

    default:
        return false;
    }

}
  
    /**
    operator
    **/
    this.isAnOperator = function(char){
          var operators = ["^", "*", "/", "%", "+", "-"];//holds array of operators
        if(operators.indexOf(char) != -1){
            return true;
        }
        return false;
    };
    /**
      res float
    **/
    this.getAns = function(output){
        var no = 0;
        var tempAns = 0;
        
        //num oper
        for(var i = 0; i<output.length; i++){
            if(this.isAnOperator(output[i])){
                ++no;
            }
        }
        
        //
        for(i = 0; i<no; i++){
            //
            for(var j = 0; j<output.length; j++){
                if(this.isAnOperator(output[j])){
                    tempAns = this.calculate(output[j - 2], output[j - 1], output[j]);
                    output[j - 2] = tempAns;
                    output.splice((j - 1),2);
                    break;
                }
            }
        }
        
        return output[0];
    };
        /**
     calculation
    **/
    this.calculate = function(a, b, op){
        a = parseFloat(a);
        b = parseFloat(b);
        var ans = 0;
        switch(op){
            case "^" : ans = Math.pow(a, b) ;
                break;
            case "*" : ans = a * b;
                break;
            case "/" : ans = a / b;
                break;
            case "%" : ans = a % b;
                break;
            case "+" : ans = a + b;
                break;
            case "-" : ans = a - b;
                break;
        }
        
        return ans;
    };
//
this.isNumeric = function(val) {
    return !isNaN(parseFloat(val)) && isFinite(val);
}


}

module.exports = Calc;