// import { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCounter from "./components/HooksCounter";
import DynamicHooksCounter from "./components/DynamicHooksCounter";

// const initialState = [
//   {
//     title: "increment and decrement by 1",
//     id: 1,
//     count: 0,
//     changer: 1,
//   },
// ];

function App() {
  // const [counter, setCounter] = useState(initialState);

  /*
  const increment = (countObj) => {
    const updatedCounter = counter.map((c) => {
      if (c.id === countObj.id) {
        return {
          ...c,
          count: c.count + countObj.changer,
        };
      }
      return { ...c };
    });
    setCounter(updatedCounter);
  };
*/
  /*
  const decrement = (countObj) => {
    const updatedCounter = counter.map((c) => {
      if (c.id === countObj.id) {
        return {
          ...c,
          count: c.count - countObj.changer,
        };
      }
      return { ...c };
    });
    setCounter(updatedCounter);
  };
  */

  /*
  // add new counter
  const addCounter = () => {
    const updatedCounter = counter.map((c) => c);
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber <= 0) {
      randomNumber += 1;
    }
    const newCount = {
      title: `increment and decrement by ${randomNumber}`,
      id: counter.length + 1,
      count: 0,
      changer: randomNumber,
    };
    updatedCounter.push(newCount);
    setCounter(updatedCounter);
  };
  */

  /*
  // reset counter
  const restCounter = () => {
    const updatedCounter = counter.map((c) => ({ ...c, count: 0 }));
    setCounter(updatedCounter);
  };
*/

  return (
    <Provider store={store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>

        <div className="max-w-md mx-auto mt-10 space-y-5">
          {/* <Counter id="1" /> */}
          <HooksCounter />
          <DynamicHooksCounter />
          {/* <div className="action-wrapper flex justify-between">
            <button
              onClick={addCounter}
              className="p-2 bg-blue-600 shadow rounded text-white"
            >
              + Add Counter
            </button>
            <button
              onClick={restCounter}
              className="p-2 bg-red-600 shadow rounded text-white"
            >
              Reset
            </button>
          </div> */}
        </div>
      </div>
    </Provider>
  );
}

export default App;
