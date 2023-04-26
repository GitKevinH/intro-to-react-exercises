import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Use state to lets you keep a constant
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <>
      Counter: {count}
      <div>
        <button onClick={increment}>Up</button>
        <button onClick={decrement}>Down</button>
      </div>
    </>
  );
}

export default Counter;
