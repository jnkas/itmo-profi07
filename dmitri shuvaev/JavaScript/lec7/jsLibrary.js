arifmethics = function() { //name of library needs to be unique enough not to conflict with anyones code
  Lib = {};

  //you can declare variables or functions only visible to this scope anywhere here
  var randomVar = 'testVar';
  function onlyVisibleHere() { /* doSomething */ }

  //if you want functions visible to outside set them like so 
  Lib.mid = function(arr) {
      var sum = 0; var len=arr.length;
    for( var i = 0; i < len; i++ ){
     sum +=arr[i]; 
    }

    var avg = sum/len;
        
      return'среднее=> ' + avg + '.';
  }
  
  Lib.findMin=function(arr){

    var len=arr.length;
    var indx=0;
    for(var i =1;i<len;i++)  
    {
     if(arr[i]<arr[indx])
     {
      indx=i;
     }
    }

return arr[indx];
}

  //lastly return your library
  return Lib;
};
document.write("<br/>");
var n=new arifmethics();

var arr=[12,4,3,10,11,20];
document.write(n.mid(arr));
document.write("<br/>min->"+n.findMin(arr));

//=====================================================

var myLib = (function () {
    
  // Keep this variable private inside this closure scope
function Clone (item) {
  if (Array.isArray(item)) {
    var newArr = [];

    for (var i = item.length; i-- !== 0;) {
      newArr[i] = Clone(item[i]);
    }

    return newArr;
  }

else if (item && typeof item === 'object') {
    var obj = {};
    for (var k in item) {
      obj[k] = Clone(item[k]);
    }
    return obj;
  }
  else
    return item;
}

  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block

  return {
    average: function(arr) {
    var sum = 0; var len=arr.length;
    for( var i = 0; i < len; i++ ){
     sum +=arr[i]; 
    }

    var avg = sum/len;
        
      return'average=> ' + avg + '.';
    },
//max
   findMax: function(arr)
   {
    var len=arr.length;
    var indx=0;
    for(var i =1;i<len;i++)  
    {
      if(arr[i]>arr[indx])
      {
       indx=i;
      }
    }
  return arr[indx];
   },
  //min
    findMin: function(arr){

    var len=arr.length;
    var indx=0;
    for(var i =1;i<len;i++)  
    {
     if(arr[i]<arr[indx])
     {
      indx=i;
     }
    }

return arr[indx];
},
      
      
      //

     clone: function(arr) { return  Clone(arr);}
  }
})();

document.write("<br/>max->"+myLib.findMax(arr)); // поиск максимально элемента в переданном массиве 
document.write("<br/>minim=>"+myLib.findMin(arr)); //поиск минимального элемента в переданном массиве
document.write("<br/><b>"+myLib.average(arr)+"<b/>");//расчет среднего арифметического значения элементов переданного массива;
var item=myLib.clone(arr);//создание копии (клонирование) переданного массива
document.write("<br/>"+item);
