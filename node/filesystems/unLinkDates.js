const fs=require('fs')
const dateFiles=['date1.txt',"date2.txt","date3.txt"]


dateFiles.forEach(elem=>{
    fs.unlink(`./filesystems/dates/${elem}`,(err)=>{
        if(err){
            console.log(err)
            return 
        }
    })
})