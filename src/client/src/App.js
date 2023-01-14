
import {Link , Route, Routes } from "react-router-dom";
import  Home  from "./pages/home";
import  Order  from "./pages/order";
import NoPage  from "./pages/nopage";
import Navbar from "./components/Navbar";
import "./App.css";
// import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {NoPage }from './pages/nopage';
// import {Home} from './pages/home';
// import {Order} from './pages/order';
export default function App() {
  return (
    <>
      <div className="header">
        <div> 
          <Navbar />
          <div className='Rname1'>
          <h1 >THE GLAMOUR Resturant & Tea lounge</h1>
        </div>
       
        </div>
       
      </div>
      
     
    

    <Routes>
        
        <Route path="/" element={<Home />}/>
        
        <Route path="/order" element={<Order/>}/>
        <Route path="/nopage" element={<NoPage />} />
        
    </Routes>
      </>
  );
}
// export default App();