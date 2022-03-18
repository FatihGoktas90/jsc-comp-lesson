import React from 'react'
import {useState} from 'react'
// function FuncComp(props){
function FuncComp({ old,color }){
    // const { old } = props;
    const [counter,setCounter]=useState(0);
    const incCounter = ()=>{
        setCounter(counter+1);
    }
    const decCounter = ()=>{
        setCounter(counter-1);
    }
    
    return (
    <>
         <h1>Welcome to ReactJS from FC</h1>
         {/* <p>Age : {old}</p> */}
         {/* <p>Color : {color.toUpperCase()}</p> */}
         <p>{counter}</p>
         <button onClick={incCounter}>Increase</button>
         <button onClick={decCounter}>Decrease</button>
    
    </>
    )
}

export default FuncComp;