const EventEmitter=require('events')

let event=new EventEmitter()

event.on('Greet',()=>{
    console.log("Hello All!")
})
event.on('Greetwithname',(name)=>{
    console.log(`Hello Welcome , ${name}`)
})
event.emit("Greet")
event.emit("Greetwithname","anbu")