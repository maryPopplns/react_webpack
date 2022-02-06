import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);

  useEffect(async () => {
    const person = await fetch("https://swapi.dev/api/people/1/?format=json");
    const json = await person.json();
    await console.log(json);
  }, []);

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
