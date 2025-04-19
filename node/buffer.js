const str="hello people"
const arr=[1,4,7,"hi"]
const buf=Buffer.from(str)

const emptyBuff=Buffer.alloc(5)

console.log(buf.toString())
console.log(emptyBuff)

emptyBuff.write("filled empty")
console.log(emptyBuff.toString())