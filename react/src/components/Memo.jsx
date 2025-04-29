import React, { useMemo, useState } from 'react'


function ExpensiveFunction({num}){

    const result=useMemo(()=>{
        console.log("print....")
        return num*2
    },[num])
    return <p className=' text-purple-800 font-semibold text-2xl m-2'>Result: {result}</p>
}
const Memo = () => {
const [number ,setNumber]=useState(0)
const [toggle,setToggle]=useState(false)

  return (
      <>
      <ExpensiveFunction num={number} toggle={toggle}/>
    <button className='bg-purple-500 px-3 py-2 text-white hover:text-black hover:bg-white border hover:border-purple-500 rounded-full m-2' onClick={()=>setNumber(number+1)}>Increase Number</button>
    <button className='bg-purple-700 px-3 py-2 text-white hover:text-black hover:bg-white border hover:border-purple-500 rounded-full m-2' onClick={()=>setToggle(!toggle)}>Toggle state</button>
    </>
  )
}

export default Memo