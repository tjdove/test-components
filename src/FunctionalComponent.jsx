import { useState, useEffect } from "react";

export default function FunctionalComponent() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  /*   function handleChange() {
    setUfo("9-Lights");
  } */

  function incrementCounter() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);

    setCount2((count2) => count2 + 1);
    setCount2((count2) => count2 + 1);
  }
useEffect() {
  Console.log("Use Effect");
}

  return (
    <div>
      Functional Component: UFO Type: {count} {count2}
      <button onClick={incrementCounter}>Change</button>
    </div>
  );
}
