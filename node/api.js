const express=require('express')
const app= express()
const users=[]

const PORT=3003
const blockGetRequest=(req,res,next)=>{
    try {
        if(req.method==='POST'){
            res.status(403).send({status:"U have been blocked"})
            return
        }
        next()
        
    } catch (error) {
        console.log(error)
    }
}

app.use(blockGetRequest)
app.get('/',(req,res)=>{
    res.send({name:"harish"})
})


app.listen(PORT,()=>{
    console.log(`db connected at http://localhost:${PORT}`)
})
// server()