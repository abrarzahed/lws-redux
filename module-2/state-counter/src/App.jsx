import { useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];

function App() {
  const [counter, setCounter] = useState(initialState);
  const totalCount = () => {
    return counter.reduce((total, cur) => total + cur.count, 0);
  };
  const increment = (id) => {
    const updatedCounter = counter.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1,
        };
      }
      return { ...c };
    });
    setCounter(updatedCounter);
  };
  const decrement = (id) => {
    const updatedCounter = counter.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count - 1,
        };
      }
      return { ...c };
    });
    setCounter(updatedCounter);
  };

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {counter.map((c) => (
          <Counter
            count={c.count}
            id={c.id}
            key={c.id}
            increment={increment}
            decrement={decrement}
          />
        ))}

        <Stats count={totalCount()} />
      </div>
    </div>
  );
}

export default App;
