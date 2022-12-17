import { connect } from "react-redux";
import Button from "./Button";
import Count from "./Count";
import { increment, decrement } from "../redux/counter/actions";
import {
  increment as dynamicIncrement,
  decrement as dynamicDecrement,
} from "../redux/dynamicCounter/actions";

function VariableCounter({ count, increment, decrement }) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count} />
      <div className="flex space-x-3">
        <Button label="Increment" action={increment} bgColor="indigo" />
        <Button label="Decrement" action={decrement} bgColor="red" />
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: ownProps.dynamic
      ? (value) => dispatch(dynamicIncrement(5))
      : () => dispatch(increment()),

    decrement: ownProps.dynamic
      ? (value) => dispatch(dynamicDecrement(3))
      : () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
