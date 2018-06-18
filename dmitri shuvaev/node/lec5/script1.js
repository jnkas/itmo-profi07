
var someList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function reversePrint(linkedList) {
  var node = someList;
  var stack = [];
while (node) {
  stack.push(node);
  node = node.next;
}
    for(var i=stack.length-1;i>=0;i--){
     console.log(stack[i].value);
        stack.pop();
    }

}
reversePrint(someList);
