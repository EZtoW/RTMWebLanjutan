var fs = require("fs");

fs.open("datamw.txt", "w+", function(err,file){
    if(err)throw err;
    let data = "Kelas Mobile and Web!";
    fs.writeFile(file,data,(err)=>{
        console.log("Tersimpan!");
    });

    fs.readFile(file,(err,data)=>{
        if (err) throw err;
        console.log(data.toString("utf8"));
    });
});