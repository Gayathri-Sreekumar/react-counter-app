import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
    document.title = `Count: ${count}`;
  }, [count]);

  return (
  <div className="card">
    <h1>Counter App</h1>
    <p>You clicked {count} times</p>
    <button className="button-increase" onClick={() => setCount(count + 1)}>
      Increase
    </button>
    <button className="button-decrease" onClick={() => setCount(count - 1)}>
      Decrease
    </button>
    <button className="button-reset" onClick={() => setCount(0)}>
      Reset
    </button>
  </div>
);
}

export default App;
