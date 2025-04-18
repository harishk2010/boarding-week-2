const fs=require('fs')

const dateFiles=['date1.txt',"date2.txt","date3.txt"]

dateFiles.forEach((elem,index)=>{
    const currentDate=new Date()
    currentDate.setDate(currentDate.getDate()+index)
    fs.writeFile(`./filesystems/dates/${elem}`,currentDate.toISOString(),(err)=>{
        if(err){
            console.log(err)
            return
        }
    })
})