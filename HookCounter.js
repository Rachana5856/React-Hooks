import React, { useState, useEffect } from 'react'

function HookCounter() {

    const [name, setname]=useState("Hello , Welcome to React js")
    const [count ,setcount]=useState("No of React js Users")
    const [counter1, setcount1]=useState(0)
    const [counter2, setcount2]=useState(10)

    const SubmitHandle=()=>{
        setname("This is fun")
        setcount("Are enomorous")
    }
    const Increment=()=>{
      setcount1(counter1+1)
    }

    const Decrement=()=>{
      setcount2(counter2-1)
    }

    const Incremented=()=>{
      for(let i=0;i<10;i++){
        setcount1(prevCount=>prevCount+1)
      }
      
    }

    useEffect(()=>{
      console.log("React js")
    },[counter1]);
    

  return (
    <div>
        {name}<br></br>
        {count}<br></br>
        <button onClick={SubmitHandle}>Submit</button>
        <button onClick={Increment}>Increment {counter1}</button>
        <button onClick={Decrement}>Decrement {counter2}</button>
        <button onClick={Incremented}>Incremented - {counter1}</button>
    </div>
  )
}

export default HookCounter