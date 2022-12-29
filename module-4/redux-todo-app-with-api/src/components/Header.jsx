import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCompleted } from "../redux/todos/actions";
import addTodo from "../redux/todos/thunk/addTodo";
import completeTodos from "../redux/todos/thunk/completeAllTodos";

export default function Header() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [todoInput, setTodoInput] = useState("");

  // handle input changes
  const handleInputChange = (e) => {
    const { value } = e.target;
    setTodoInput(value);
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoInput));
    setTodoInput("");
  };

  // handle all completed
  const handleAllComplete = () => {
    dispatch(completeTodos(todos));
  };

  // handle clear completed
  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src="./images/notes.png" className="w-6 h-6" alt="Add todo" />
        <input
          value={todoInput}
          onChange={handleInputChange}
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain"
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={handleAllComplete}
          className="flex space-x-1 cursor-pointer"
        >
          <img
            className="w-4 h-4"
            src="./images/double-tick.png"
            alt="Complete"
          />
          <span>Complete All Tasks</span>
        </li>
        <li
          onClick={handleClearCompleted}
          className="cursor-pointer text-red-400"
        >
          Clear completed
        </li>
      </ul>
    </div>
  );
}
