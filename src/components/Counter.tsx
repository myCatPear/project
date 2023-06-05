import React, { useState } from "react";
import './Counter.scss'

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrementButtonClick = () => setCount(count + 1);

  const onDicrementButtonClick = () => setCount(count - 1);
  return (
    <div>
      <span>{count}</span>
      <button onClick={onIncrementButtonClick}>Increment</button>
      <button onClick={onDicrementButtonClick}>Dicrement</button>
    </div>
  );
};
