
module.exports=class FileJSONStorage{
    constructor(path){
        this._source=path;
        this._store=[];
    }
    write(cb){
        var fs = require("fs");
        fs.writeFile(this._source, JSON.stringify(this._store), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    
    console.log("File has been created");
});
    }
    read(cb){
           var fs = require("fs");
        fs.readFile(this._source, (err,data)=>{
            if(err)return cb(err);
            this._store=JSON.parse(data);
            cb();
        })
    }
    addData(data){
     this._store.push(data);   
    }
    getAllData(){
     return this._store;   
    }
    findDataByPropery(propName, value){
	
     for(let i=0;i<this._store.length;i++){
         if(this._store[i][propName] &&this._store[i][propName]==value){
             return this._store[i];
         }
     }   
	 
    }
}

