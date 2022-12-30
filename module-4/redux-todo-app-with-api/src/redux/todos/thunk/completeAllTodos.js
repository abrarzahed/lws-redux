import { allCompleted } from "../actions";

const fetchTodos = (allTodos) => {
  console.log(allTodos);
  return async (dispatch) => {
    const tempArr = [];
    for (let todo of allTodos) {
      const response = await fetch(`http://localhost:9000/todos/${todo.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          completed: true,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const resTodo = await response.json();

      tempArr.push(resTodo);
    }
    console.log(tempArr);
    dispatch(allCompleted(tempArr));

    // await fetch("http://localhost:9000/todos", {
    //   method: "PATCH",
    //   body: JSON.stringify({
    //     completed: true,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // });

    // dispatch(allCompleted());
  };
};

export default fetchTodos;
