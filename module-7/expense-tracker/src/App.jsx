import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllTransactions from "./pages/AllTransactions";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all-transactions" element={<AllTransactions />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
