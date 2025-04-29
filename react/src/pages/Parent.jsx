import React, { useState } from 'react'
import Child from '../components/Child'

const Parent = () => {

    let [value,SetValue]=useState('')

    let fun=(arg)=>{
        SetValue(arg)
    }
  return (
    <>
    <div className='text-black'>Parent</div>
    <h1 className='text-red-700'>{value}</h1>
    <Child fun={fun} />
    </>
  )
}

export default Parent