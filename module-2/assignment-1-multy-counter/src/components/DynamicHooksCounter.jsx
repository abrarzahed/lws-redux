import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import Count from "./Count";
import { increment, decrement } from "../redux/dynamicCounter/actions";

export default function DynamicHooksCounter() {
  const count = useSelector((state) => state.dynamicCounter.value);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(increment(value));
  };
  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count} />
      <div className="flex space-x-3">
        <Button
          label="Increment"
          action={() => incrementHandler(5)}
          bgColor="indigo"
        />
        <Button
          label="Decrement"
          action={() => decrementHandler(3)}
          bgColor="red"
        />
      </div>
    </div>
  );
}
