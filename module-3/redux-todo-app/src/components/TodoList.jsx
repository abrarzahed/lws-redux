import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
  const allTodos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filter);
  const { status, colors } = filters;

  const filteredTodos = allTodos
    .filter((todo) => {
      switch (status) {
        case "Complete":
          return todo.completed;

        case "Incomplete":
          return !todo.completed;

        default:
          return todo;
      }
    })
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
        <Todo key={i} todo={todo} />
      ))}
    </div>
  );
}
