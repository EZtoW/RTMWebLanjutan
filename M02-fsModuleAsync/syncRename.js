const fs = require("fs");

try{
    fs.rename("mwsore.json","mwpagi.json");
        console.log("Berhasil mengganti nama!");
}catch(err){
    console.error(err);
}
