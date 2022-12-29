import { allCompleted } from "../actions";

const fetchTodos = (allTodos) => {
  const completedTodos = allTodos.map((todo) => {
    return {
      ...todo,
      completed: true,
    };
  });
  return async (dispatch) => {
    await fetch("http://localhost:9000", {
      method: "POST",
      body: JSON.stringify({
        todos: [...completedTodos],
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    dispatch(allCompleted());
  };
};

export default fetchTodos;
