import { clearCompleted } from "../actions";
const clearCompletedTodos = (completedTodos) => {
  console.log("completed todos", completedTodos);
  return async (dispatch) => {
    for (let todo of completedTodos) {
      await fetch(`http://localhost:9000/todos/${todo.id}`, {
        method: "DELETE",
      });
    }
    dispatch(clearCompleted());
  };
};

export default clearCompletedTodos;
