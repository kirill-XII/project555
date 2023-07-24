import "./App.css";
import { useState } from "react";
// export default function Counter() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>You pressed me {count} times</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }

function Counter() {
  const [count, setCount] = useState(4);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>Счетчик: {count}</h1>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
    </>
  );
}

export default Counter;
