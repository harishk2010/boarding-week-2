const express=require('express')
const app=express()


app.get('/app',(req,res)=>{
    console.log("first")
    console.log(req.query.num1)
    console.log(req.query.num2)
    let sum=parseFloat(req.query.num1)+parseFloat(req.query.num2)
    res.send(`
        <html>
        <head><title>great</title></head>
        <body>
        <h1>I am the sum ${sum}</h1>
        </body>
        </html>
        `)
})
app.listen(4001,()=>{
    console.log("app runs at http://localhost:4001")
})