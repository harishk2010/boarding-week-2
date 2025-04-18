const {Transform}=require('stream')

const transformStream=new Transform({
    transform(chunk,encoding,callback){
        const uppercase=chunk.toString().toUpperCase()
        this.push(uppercase)
        callback()
    }
})

process.stdin.pipe(transformStream).pipe(process.stdout)