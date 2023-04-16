import { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>
        <h1>React Testanwendung</h1>
        <h2>HouseTech</h2>
      </div>
      <div className="content">
        <div className="vertical">
          <button onClick={() => setCounter(counter + 1)}>Klick mich!</button>
          <button onClick={() => setCounter(0)}>Selbstzerstörung</button>
        </div>
        <div id="card-container">
          <Card title="Klicks gegeben" content={counter}/>
        </div>
      </div>
    </div>
  );
}

export default App;
