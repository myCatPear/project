import React, { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrementButtonClick = () => setCount(count + 1);

  const onDicrementButtonClick = () => setCount(count - 1);
  return (
    <div>
      <span className={classes.red}>{count}</span>
      <button onClick={onIncrementButtonClick}>Increment</button>
      <button onClick={onDicrementButtonClick}>Dicrement</button>
    </div>
  );
};
