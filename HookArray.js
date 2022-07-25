import React, { useState } from 'react'

function HookArray() {
    const [item, setitem]=useState([])

    const additem=()=>{
        setitem([...item,{
            value:Math.floor(Math.random()*10)
        }])
    }
  return (
    <div>
        <button onClick={additem}>Add Item on Click</button>
        <ul>{item.map(item=>(<li key = {item.value}>{item.value}</li>))}</ul>        
    </div>
  )
}

export default HookArray