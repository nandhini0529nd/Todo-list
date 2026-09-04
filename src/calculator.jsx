import { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [number, setNumber] = useState("");

  return (

       <div className="calculator">
      <h1>Calculator</h1>

      <input value={number} readOnly />

      <br /><br />

      <button className="number" onClick={() => setNumber(number + "1")}>1</button>
      <button  className="number"onClick={() => setNumber(number + "2")}>2</button>
      <button  className="number"onClick={() => setNumber(number + "3")}>3</button>
      <button  className="number"onClick={() => setNumber(number + "4")}>4</button>
      <button className="number" onClick={() => setNumber(number + "5")}>5</button>
    
      <button  className="number"onClick={() => setNumber(number + "6")}>6</button>
      <button  className="number"onClick={() => setNumber(number + "7")}>7</button>
      <button  className="number"onClick={() => setNumber(number + "8")}>8</button>
      <button className="number" onClick={() => setNumber(number + "9")}>9</button>
      <button  className="number"onClick={() => setNumber(number + "0")}>0</button>
      
      <button className="operator" onClick={() => setNumber(number + "+")}>+</button>
      <button className="operator" onClick={() => setNumber(number + "-")}>-</button>
      <button className="operator" onClick={() => setNumber(number + "*")}>×</button>
      <button className="operator" onClick={() => setNumber(number + "/")}>÷</button>

      <button className="equal" onClick={() => setNumber(eval(number))}>=</button>
      
      <button  className="clear" onClick={() => setNumber("")}>Clear</button>
    
    </div>
  );
}

export default Calculator;