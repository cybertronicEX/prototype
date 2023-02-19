
import { Route, Routes } from "react-router-dom";
import  Home  from "./pages/home";
import  Order  from "./pages/order";
import NoPage  from "./pages/nopage";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart"
import "./App.css";

export default function App() {
  return (
    <>
      <div className="header">
          <Navbar />
          <div className='Rname1'>
          <h1 >THE GLAMOUR Resturant & Tea lounge</h1>
        </div>
      </div>

    <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/nopage" element={<NoPage />} />
        <Route path="/cart" element={<Cart />}/>
        
    </Routes>
      </>
  );
}
