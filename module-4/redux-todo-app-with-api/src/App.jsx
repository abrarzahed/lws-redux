import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import store from "./redux/store";
import CompletedTodoList from "./components/completedTodoList";

function App() {
  return (
    <Provider store={store}>
      <div className="grid mt-[130px] place-items-center  bg-blue-100 px-6 font-sans">
        <Navbar />

        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />
          <hr className="mt-4" />

          <TodoList />
          <hr className="mt-4" />

          <Footer />
        </div>
      </div>
      <div className="px-6 mt-10 bg-blue-100">
        <div className="w-full font-sans max-w-3xl mx-auto shadow-lg rounded-lg p-6 bg-white">
          <CompletedTodoList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
