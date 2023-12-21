import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Customization from "./pages/Customization";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shpop from "./pages/Shpop";
import Exclusive from "./pages/Exclusive";
import Booking from "./pages/Booking";
import Buy from "./pages/Buy";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <div className=" md:py-10 py-14">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cust" element={<Customization />} />
            <Route path="/shop" element={<Shpop />} />
            <Route path="/excu" element={<Exclusive />} />
            <Route path="/book" element={<Booking />} />
            <Route path="/buy" element={<Buy/>} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
