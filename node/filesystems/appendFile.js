const fs=require('fs')

fs.appendFile("ranagalam.txt"," here I rule thala",(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data)
})

