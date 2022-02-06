import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);

  function clickHandler() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div>{count}</div>
      <div>{count}</div>
      <button onClick={clickHandler}>incrementer</button>
    </>
  );
}
