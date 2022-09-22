import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
   <>
   <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      
      </Routes>
   </>
  );
}

export default App;
