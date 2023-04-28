import './Calculator.css';
import {useState} from 'react';

function App(){
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const digits = [];  
  const ops = ["+","-","*","/","."];
  const createDigits = ()=> {
       for(let i=1; i<10; i++){
          digits.push(
            <button 
            onClick={()=>updateCalc(i.toString())}
            key={i}
            >{i}</button>
          );
       }
       return digits;
  }
  const updateCalc = value =>{
    if(
      (ops.includes(value) && calc==="")
      ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ){
     return;
    }else{
    setCalc(calc + value);
    }

    if(!ops.includes(value)){
      setResult((eval(calc+value).toFixed(2)));
    }

  }

  const calculate= () =>{
    if(eval(calc).toFixed(1)<0.09){
      window.alert("The calculator does not print values lower than 0.9");
    }else{
      setCalc((eval(calc).toFixed(2)));
    }
  }


 const deleteLast = ()=>{
   let value = calc.slice(0, -1);
   if(calc === ""){
      return;
   }else{
    setCalc(value);
   }
 }

  return (
    <div className="App">
    <div id="display">
      <span>{result? "("+result+")":"(0)"}</span>{calc? calc:0}
    </div>
    <div id="ops">
    <button onClick={()=>updateCalc("+")}>+</button>
    <button onClick={()=>updateCalc("-")}>-</button>
    <button onClick={()=>updateCalc("*")}>*</button>
    <button onClick={()=>updateCalc("/")}>/</button>
    <button onClick={deleteLast}>DEL</button>
    </div>
    <div className="digits">
      { createDigits() }
    </div>
    <div id="defaults">
      <button onClick={()=>updateCalc("0")}>0</button>
      <button onClick={()=>updateCalc(".")}>.</button>
      <button onClick={calculate}>=</button>
    </div>
    </div>
  );
}

export default App;
