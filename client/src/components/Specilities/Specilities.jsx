import React from 'react'
import { useSelector } from 'react-redux'

function Specilities() {

    const specility = useSelector(state=> state.specility);


  return (
    <div>
      {specility.map((specility)=>(
        <div key={specility.id}>
        <h1>{specility.name}</h1>
        <h1>{specility.description}</h1>
        </div>
      ))}
    </div>
  )
}

export default Specilities
