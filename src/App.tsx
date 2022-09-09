import React, {useState} from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const host = process.env.GATHER_API_HOST;
  axios.get(`${host}/count`).then((res) => {
    setCount(res.data.count);
  });
  return (
    <div className="App">
      <h1>1111111 /// {count}</h1>
    </div>
  );
}

export default App;
