import { connect } from "react-redux";
import Button from "./Button";
import Count from "./Count";
import { increment, decrement } from "../redux/counter/actions";

function Counter({ count, increment, decrement }) {
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

const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
