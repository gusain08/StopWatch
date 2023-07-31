import React, { useEffect, useState } from 'react'

const App = () => {
  const [time, setTime] = useState(0);
  const [running, setSRunning] = useState(false);
  useEffect(()=>{
    let interval; 
    if(running){
      interval = setInterval(()=>{
        setTime((prevTime) => prevTime + 10);
      },10)
    }else if(!running){
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  },[running])
   return (
   <>
   <h1>Stopwatch</h1>
    <div className="App">
      
      <div className="card" style={{textAlign:'center'}}>
  
        <span>{('0' + Math.floor(time/60000) % 60).slice(-2)} : </span>
        <span>{('0' + Math.floor(time / 1000) % 10).slice(-2)} : </span>
        <span>{('0'+ (time / 10) % 100).slice(-2)}</span>
       

      </div>
      { 
        running ? (
          <button onClick={()=>setSRunning(false)}>Stop</button>
        ) : (
          <button onClick={()=>setSRunning(true)}>Start</button>
        )
      }
      
     
      <button onClick={()=>setTime(0)}>reset</button>
    </div>
   
   </>
  )
}

export default App