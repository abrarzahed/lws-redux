import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <!-- navigation --> */}
        <Navbar />

        {/* <!-- search --> */}
        <SearchBox />

        {/* blogs */}
        <Blogs />

        {/* <!-- footer --> */}
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
