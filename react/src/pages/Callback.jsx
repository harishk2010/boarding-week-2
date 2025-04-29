import React, { useCallback, useState } from 'react'

const Callback = () => {
    const [count ,setCounter]=useState(0)

    // let handlCount=useCallback(()=>{
    //   console.log("first")
    //     setCounter(ct=>ct+1)
    // })
    let handlCount=()=>{
      console.log("first")
        setCounter(ct=>ct+1)
    }
  return (
    <>
    <h1 className='text-purple-400'>{count}</h1>
    <button onClick={handlCount} className='bg-purple-300 rounded-lg'>Plus</button>
    <button onClick={()=>setCounter(e=>e+1)} className='bg-purple-300 rounded-lg'>Plus with render</button>
    
    </>
  )
}

export default Callback