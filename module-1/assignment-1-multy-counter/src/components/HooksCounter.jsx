import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import Count from "./Count";
import { increment, decrement } from "../redux/counter/actions";

export default function HooksCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count} />
      <div className="flex space-x-3">
        <Button label="Increment" action={incrementHandler} bgColor="indigo" />
        <Button label="Decrement" action={decrementHandler} bgColor="red" />
      </div>
    </div>
  );
}
