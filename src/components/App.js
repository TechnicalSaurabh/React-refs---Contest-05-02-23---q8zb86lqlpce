import React,{useState,useEffect,useRef} from 'react'
import '../styles/App.css';
const App = () => {
  const[state1 , setState1] =useState("");
  const[state2 , setState2] =useState("");
  const[email, setEmail] =useState("");
  const[pass, setPass] =useState("");
  
  const ref1 = useRef();
  const ref2 = useRef();

  function handleInput1(e){
   setState1(e.target.value);
  }

  function handleInput2(e){
    setState2(e.target.value);
  }

   

  function handlesubmit(){
       if(!state1){
        ref1.current.focus();
       }
       else if(!state2){
        ref2.current.focus();
       }
       else{
        setEmail( state1); 
        setPass (state2); 
        setState1("");
        setState2("");
       }
  }

  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={state1} ref={ref1} onChange={handleInput1}/><br/>
      Password
      <input id="inputPassword" type="text" value={state2} ref={ref2} onChange={handleInput2}/><br/>
      <button id="submitButton" onClick={handlesubmit}>Submit</button><br/>
      <p id="emailText">Your Email : {email}</p>
      <p id ="passwordText">Your Password : {pass}</p>
      
    </div>
  )
}


export default App;
