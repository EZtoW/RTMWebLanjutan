const myMiddleware = (req, res, next) =>{
    if(req.params.nim == "123"){
        console.log("NIM terverifikasi");
        next();
    }else{
        const err = {
            status: "error",
            data:{
                nim: req.params.nim
            }
        }
        next(err);
    }
};

app.get("/api/:nim/:nama", myMiddleware, function(req, res){
    res.statusCode = 200;
    res.setHeader9("Content-Type","text/plain")
    res.send(req.params)
})

app.use((err, req, res, next)=>{
    res.send(error);
})