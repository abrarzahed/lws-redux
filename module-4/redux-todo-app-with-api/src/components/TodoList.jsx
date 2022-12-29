import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import Todo from "./Todo";

export default function TodoList() {
  const dispatch = useDispatch();
  const allTodos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filter);
  const { colors } = filters;

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  const filteredTodos = allTodos
    .filter((todo) => !todo.completed)
    .filter((todo) => {
      if (colors.length > 0) {
        return colors.includes(todo.color);
      } else {
        return todo;
      }
    });

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {filteredTodos.map((todo, i) => (
        <Todo key={i} todo={todo} completedTodoList />
      ))}
    </div>
  );
}
