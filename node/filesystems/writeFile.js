const fs=require('fs')

fs.writeFile("./filesystems/ranagalam.txt","billa",(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("File written successfully!")
})