import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Event from "./pages/Event"
import Registration from "./pages/Registration";
import About from "./pages/About";
import Result from "./pages/Result";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/registration/:id" element={<Registration />} />
        <Route path="/about" element={< About />}  />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
};

export default App;
