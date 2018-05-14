(function () {
  'use strict';

/*            
* This is the file which will call our java script file that need to be tested. 
* Each describe block is equivalent to one test case    
*     
*/    

describe("функция", function(){ 
   beforeEach(function() { 
      // We should add custom matched in beforeEach() function. 
      jasmine.addMatchers ({ 
         validateNum: function() { 
            return {    
               compare: function(actual,expected) {
                  var result = {}; 
                  result.pass = (actual >0);
                  result.message = 'x меньше нуля ';
                  return result; 
               }   
            };   
         }, 
          //

          
          
      });    
   }); 
  
   it("x должно быть больше 0",function(){ 
      expect(calculate(1)).validateNum(); 
   }); 
    
       it("x не должно равно нулю",function(){
    
      expect(calculate(-1)).not.toEqual(0); 
   }); 

});
    
    
    
})();
