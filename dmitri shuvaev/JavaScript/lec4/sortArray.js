var arr=[12,4,3,10,1,20];

function Partition(arr,start,end){
 var pivot=arr[end];//последний элемент предназначен для разделения на подмассивы
    var temp;//временная переменная для обмена
    var pIndex=start;//начельный индекс
    for(var i=start;i<end;i++){
        if(arr[i]<=pivot){//если елемент массива меньше pivot меняем местами
            temp=arr[i];
            arr[i]=arr[pIndex];
            arr[pIndex]=temp;
            pIndex++;
        }
    }
   temp=arr[pIndex];
    arr[pIndex]=arr[end];//меняем местами пивот и определяем левый и правый подмассивы
    arr[end]=temp;//елементы меньше пивот будут слева больше справа
    return pIndex;
}
function Qusort(arr,start,end){
    if(start<end){//
     var pIndex=Partition(arr,start,end);
     Qusort(arr,start,pIndex-1);//сортирует левую сторону 
     Qusort(arr,pIndex+1,end);//сортирует правую сторону   
     
    }

}
document.write("<br/>");
Qusort(arr,0,arr.length-1);
document.write("После сортировки="+arr);