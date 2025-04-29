import React, { useState } from 'react'

const Child = ({fun}) => {
    let [value,setValue]=useState('')

    function valFunction(e){
        setValue(e.target.value)
    }
  return (
    <>
    <input className='bg-blue-400 border-2' type="text" onChange={valFunction} />
    <button className='bg-gray-700 px-3 py-2 rounded rounded-lg m-2 text-white' onClick={()=>fun(value)}>Send</button>
    </>
  )
}
    
export default Child