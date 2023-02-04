import './index.css';
import info from './data/pubinfo.json';
import React, { useState } from 'react';


function App() {
  const [inputstate, setInputstate] = useState('');
  const [result, setResult] = useState(0);
  const [caption, setCaption] = useState(true);

  const usdinfo = (Math.ceil((info[0]["sale"])* 100) / 100);



  return (
    <div className="container">
      <div className="app">
      <form onSubmit={(event) => {caption? setResult(inputstate * usdinfo): setResult(inputstate / usdinfo)
      event.preventDefault();}
      }>
        <h3>Ціна за 1$ по курсу Приват {usdinfo}</h3>
        <div className="input-row">
        <input onChange={(event) => { setInputstate(event.target.value) }}
         type="number" placeholder={caption?"Сума в доларах":"Сума в гривні"}  name="maininput" /> 
         <button type="button"  onClick={() => {setCaption(!caption);setResult(0);}} >Переключити</button>
        </div>
        <button type="submit" >Порахувати</button>
      </form>
        <p>{caption?"Сума в гривні":"Сума в доларах"} {result.toFixed(2)} {caption?"ГРН":"$"} </p>
      </div>
    </div>
  );
}

export default App;
