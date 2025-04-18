const {Duplex}=require('stream')

const duplexStream=new Duplex({
    read(size){
        this.push("hello")
        this.push("hello1")
        this.push(null)
    },
    write(chunk,encoding,callback){
        console.log("=>",chunk.toString())
        callback()
    }
})

duplexStream.write("duplex.txt")
duplexStream.pipe(process.stdout)