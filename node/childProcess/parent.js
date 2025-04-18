const {fork}=require('child_process')

const child=fork('child.js')

child.send("im your parent")

child.on('message',(msg)=>{
    console.log("message from child>>",msg)
})