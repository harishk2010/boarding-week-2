const express=require("express")
const app=express()
const fs=require('fs')

app.use(express.urlencoded())
const PORT=4001
const isUser=(req,res,next)=>{
    if(req.headers.role=="users"){
        console.log(req.headers)
        fs.writeFile('./node/headers.txt',"donee",(err,data)=>{
            if(err){
                console.log(err)
                return
            }
            console.log("written in file")
        })
        res.send({message:"user is Blocked"})
        return
    }else next()
}
// app.use(isUser)
app.post('/users',isUser,(req,res)=>{
    try {
        // console.log(req.headers)
        let {name}=req.body
        console.log(name)
        res.send({name})
        
    } catch (error) {
        console.log(error)
    }
})
app.listen(PORT,()=>{
    console.log(`db connected at http://localhost:${PORT}`)
})