import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import Todo from "./Todo";

export default function CompletedTodoList() {
  const dispatch = useDispatch();
  const allTodos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  const filteredTodos = allTodos.filter((todo) => todo.completed);

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      <span className="">Completed Todos</span>
      <hr className="my-4" />
      {filteredTodos.map((todo, i) => (
        <Todo key={i} todo={todo} completedTodoList={false} />
      ))}
      <p className="mt-4">
        {filteredTodos.length > 1
          ? `${filteredTodos.length} todos`
          : `${filteredTodos.length} todo`}{" "}
        completed
      </p>
    </div>
  );
}
