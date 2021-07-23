import React,{useState,useEffect} from 'react';

const Hooks = () => {
    const[count,setCount]=useState(0);
    // here count is the state variable and setCount is the function to
    // alter that 0 is the initial state of count

    useEffect(()=>{
        document.title = `You clicked ${count} times`;  
        console.log('called useEffect')
    });

    return (
        <div>
            <h5>{count}</h5>
            <button onClick={()=>setCount(count+1)}>Add Count</button>
        </div>
    );
}

export default Hooks;

//Rules
// only call hooks at the top 
//only use in the functions 
// types
// 1.useState allow us to use state inside a function
