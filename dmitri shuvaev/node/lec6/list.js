function Node(data) {
    this.data = data;
    this.next = null;
};
function LinkedList() {
  // head will be the top of the list
  // we'll define it as null for now
  this.head = null;
  this.length = 0;
  
    this.add = function(data) {
    var nodeToAdd = new Node(data),
        nodeToCheck = this.head;
    // if the head is null
    if(!nodeToCheck) {
      this.head = nodeToAdd;
      this.length++;
      return nodeToAdd;
    }
    // loop until we find the end
    while(nodeToCheck.next) {
      nodeToCheck = nodeToCheck.next;
    }
    // once were at the end of the list
    nodeToCheck.next = nodeToAdd;
    this.length++;
    return nodeToAdd;
  }
//
    this.removeAt = function(index) {
    var nodeToCheck = this.head,
      length = this.length,
      count = 0,
      prevNode = null;
      // error check
      if(index > length) {
        return "Doesn't Exist!"
      }
      // if the first node
      if(index === 0) {
        this.head = nodeToCheck.next;
        this.length--;
        return this.head;
      }
      // all other cases
      while(count < index) {
        prevNode = nodeToCheck;
        nodeToCheck = nodeToCheck.next;
        count++;
      }
      // nodeToCheck is now the correct node
      prevNode.next = nodeToCheck.next;
      nodeToCheck = null;
      this.length--;
      
      return this.head;
}
    //delete value
    this.remove = function(value) {
    var nodeToCheck = this.head,
      length = this.length,
      count = 0,
      prevNode = null;
    //
      while(count < length) {
        if(nodeToCheck.data==value)break;
        prevNode = nodeToCheck;
        nodeToCheck = nodeToCheck.next;
        count++;
      }
      // error check
      if(count >= length) {
          console.log("Doesn't Exist!"+count);
        return "Doesn't Exist!"
      }
      // if the first node
      if(count === 0) {
        this.head = nodeToCheck.next;
        this.length--;
        return this.head;
      }

      // nodeToCheck is now the correct node
      prevNode.next = nodeToCheck.next;
      nodeToCheck = null;
      this.length--;
      
      return this.head;
}//
    this.get=function(index){
     var nodeToCheck = this.head,
     length = this.length,
      count = 0,
      prevNode = null;
    //
     if(index > length) {
         console.log("Doesn't Exist!");
        return "Doesn't Exist!"
      }
      while(count < length) {
          if(count==index){
              console.log("index= "+index);
              return index;
          }
        nodeToCheck = nodeToCheck.next;
        count++;
      }
     if(count >= length) {
          console.log("Doesn't Exist!"+count);
        return "Doesn't Exist!"
      }   
    }
    //clear function
    
    this.clear=function(){
    temp1 = this.head;

while(temp1!=null) // as I am considering tail->next = NULL
{
    this.head.next = temp1.next;
    temp1.next = null;
    temp1.data=null;
    
    temp1 = this.head.next;
}this.head=null;
          this.length = 0;
    }
//
    this.contains=function(value){
     var h=this.head;
        while(h){
       if(h.data==value)return true;
            h=h.next;
        }
        return false;
    }
     this.insertAsFirst = function(d) { 
  var temp = new Node(d); 
  temp.next = this.head; 
  this.head = temp; 
 
 };
    //
    this.insert = function(index, d) { 
  var current = this.head; 
        if(current==null){this.insertAsFirst(d);return;}
        var prev=current;
        var count=0;
        var end=this.head;
        while(end.next!==null){
         end=end.next;
        }
        console.log('end='+end.data);
  while (current !== null) { 
   if (count === index) { 
       if(index==0){this.insertAsFirst(d);return;}
    var temp =new Node(d);
    temp.next = prev.next; 
       //console.log(index);

    prev.next = temp; 
    return; 
   } 
 if (current === end){
         var temp =new Node(d);
        console.log('end');
        end.next=temp;
        return;
    } 
      prev=current;
   current = current.next;
      count++;
   }
  };
    //
    this.isEmpty=function(){
             var h=this.head;
        if(h===null)return true;
        else  {
            console.log("data "+h.data);
           return false;
        }
    
    }//
    
    this.len=function() {
      var h=this.head;
        var len=0;
      while(h){
      len++
            h=h.next;
        }
        return len;
    }
    this.print=function(){
        var h=this.head;
        while(h){
         console.log(h.data);
            h=h.next;
        }
    }
}
var l=new LinkedList();
console.log("list isemty="+l.isEmpty());
l.add(1);
l.add(2);
l.add(3);
l.insert(0,4);
l.insert(4,5);
l.insert(5,6);
console.log("l="+l.len());
l.print();
console.log('============');
//l.removeAt(1);
l.remove(4);
l.get(2);
console.log(l.contains(2));
l.clear();
//console.log(l.contains(2));
console.log("list isemty="+l.isEmpty());
l.print();
console.log("l="+l.len());