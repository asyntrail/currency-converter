import './index.css';
import info from './data/pubinfo.json';
import React, { useState } from 'react';


function App() {
  const [inputstate, setInputstate] = useState('');
  const [result, setResult] = useState(0);

  const usdinfo = info[0]["sale"];

  return (
    <div className="container">

      <div className="app">
      <form onSubmit={(event) => {setResult(inputstate * usdinfo)
      event.preventDefault();}
      }>
        <h3>Калькулятор</h3>
          <input onChange={(event) => { setInputstate(event.target.value) }}
           type="number" placeholder="Сума в гривні" name="maininput" />
        <button type="submit" >Порахувати</button>
      </form>
        <p>Сума в доларах {result} </p>
      </div>
    </div>
  );
}

export default App;
