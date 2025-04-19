const EventEmitter=require('events')

const event=new EventEmitter()

// event.once("Greet",()=>{
//     console.log("Hello WOrld!")
// })
event.on("Greet",()=>{
    console.log("Hello WOrld!")
})

event.emit("Greet")
event.emit("Greet")
event.removeListener("Greet",)
event.emit("Greet")