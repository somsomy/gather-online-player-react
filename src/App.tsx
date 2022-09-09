import React, {useState} from 'react';
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  axios.get('/count').then((res) => {
    setCount(res.data.count);
  });
  return (
    <div className="App">
      <h1>1111111 /// {count}</h1>
    </div>
  );
}

export default App;
