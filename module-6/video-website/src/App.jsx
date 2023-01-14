// import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import Video from "./pages/Video";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/videos/:videoId" element={<Video />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
