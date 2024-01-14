import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);

  const increaseNum = () => {
    setNum(num + 1);
  };

  const resetNum = () => {
    setNum(0);
  };

  const decreaseNum = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={resetNum}>Reset</button>
      <button onClick={decreaseNum}>Decrease</button>
    </div>
  );
}

export default App;