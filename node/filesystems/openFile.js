const fs=require('fs')

fs.open('ranagalam.txt','r',err=>{
    if(err){
        console.log(err)
        return
    }
    console.log("opened the file")
})