const {spawn}=require('child_process')

const dir=spawn('cmd',['/c','dir'])

dir.stdout.on('data',(data)=>{
    console.log("first",data.toString())
})

dir.on('close',(code)=>{
    console.log(`Child process exited with code ${code}`);
})