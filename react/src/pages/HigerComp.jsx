import React from 'react'
import HelloWithTitle from '../components/HelloWithTitle'

function greet({name}){
  return <p className='bg-gray-300 p-2'>my name is : {name}</p>
}

const WithTitle=HelloWithTitle(greet)
const HigerComp = () => {
  return (
    <>
    <WithTitle name={"harish"}/>
    </>
  )
}

export default HigerComp