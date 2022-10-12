import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [msg,setMsg] = useState('start');

  useEffect(() => {
    setTimeout(() => {
      setMsg('end');
    },1000)
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <Child msg={msg} />
      </header>
    </div>
  );
}

function Child({msg}) {
  return (
    <p>{msg}</p>
  )
}

export default App;
