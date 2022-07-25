import React, { useEffect, useState } from 'react'

function HookPosition() {
    const [x,setx]=useState(0);
    const [y,sety]=useState(0);

    const logmousemove=e=>{
        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(()=>{
        console.log("use effect");
        window.addEventListener('mousemove',logmousemove)
    },[])
  return (
    <div>
        x-{x}<br></br>  y-{y}
    </div>
  )
}

export default HookPosition