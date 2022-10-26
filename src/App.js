import './index.css';
import cur from './data/currency.json';
import React, { useState } from 'react';


function App() {
  const [inputstate, setInputstate] = useState('');
  const [result, setResult] = useState(0);

  const currency = cur[0]["usd"];

  return (
    <div className="container">
      <div className="app">
        {cur.map(item =>
          <p key={item+"key"}>UAH {item.uah} to USD {item.usd} </p>)}
        <input onChange={(event) => {setInputstate(event.target.value) }} type="number" />
        <button onClick={() =>
          setResult(inputstate * currency)}>Convert</button>
        <p>Result is {result} </p>
      </div>
    </div>
  );
}

export default App;
