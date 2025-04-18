process.on('message',(msg)=>{
    process.send("imyour child!!")
    console.log("from parent>>",msg)
})