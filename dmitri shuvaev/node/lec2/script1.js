function get_quadrant_number(X,Y){
    try{
    if(X>0&&Y>0){
   return 1;     
        }
    else if(X<0&&Y>0){
        return 2;
    }
        else if(X<0&&Y<0){
        return 3;
    }
        else if(X>0&&Y<0){
        return 4;
    }else{
        throw "error";
    }    
    }catch(err){
       return err;
    }

}
 console.log(get_quadrant_number(0,0));
 console.log(get_quadrant_number(1,0));
 console.log(get_quadrant_number(1,1));
 console.log(get_quadrant_number(1,-1));
 console.log(get_quadrant_number(-1,-1));
 console.log(get_quadrant_number(-1,1));