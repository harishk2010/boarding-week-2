const fs=require('fs')

function checkWord(word){
    fs.readFile('ranagalam.txt','utf-8',(err,data)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(data.split(" ").includes(word))
        return data.split(" ").includes(word)
    })
}

let str="thala"
checkWord(str)