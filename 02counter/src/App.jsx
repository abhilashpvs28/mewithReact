import { useState } from 'react';
import './App.css'

function App() {


  let [countp, setCountp] = useState(0)

 const countup = () =>{
  let  newcount = countp + 1;
   
   if( newcount > 10){
     setCountp(10)
    }
    else {
      setCountp(newcount)
    }

  // console.log(countp,"countp")
 } 

const countdown = () =>{
  let newcount = countp - 1;
  if(newcount < 0){
    setCountp(0)
  }
  else{
    setCountp(newcount)
  }
  // console.log(countp,"countD")

}




  return (
    <>
    <h1>Hi from Abhilash</h1>

    <h3>Counter Here : {countp}</h3>
     
     <button onClick={countup}>Count Up</button>
     <button onClick={countdown}>Count Down</button>
    </>
  )
}

export default App
