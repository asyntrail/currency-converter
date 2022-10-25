import './index.css';
import cur from './data/currency.json';

function App() {
  return (
    <div className="container">
      <div className="app">
        {cur.map( item => 
        <p>UAH {item.uah} to USD {item.usd} </p>)}
        <input type="text" />
        <button>Convert</button>
      </div>
    </div>
  );
}

export default App;
