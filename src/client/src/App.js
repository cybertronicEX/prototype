
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, useAuth  } from "./components/AuthContext";
import  Home  from "./pages/home";
import  Order  from "./pages/order";
import NoPage  from "./pages/nopage";
// import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import Cart from "./pages/cart"
import Login from "./pages/login"
import Register from "./pages/register"
import "./App.css";



export default function App() {
  return (
    <>
    <AuthProvider>
        <div className="header">
            {/* <Navbar /> */}
            <Navigation />
          <div className="headerName">
            <div className='Rname1'>
              <h1 >THE GLAMOUR Resturant & Tea lounge</h1>
            </div>
            <div className="welcome"><UserInfo /></div>
          </div>
        </div>
        

      <Routes>

          <Route path="/home" element={<Home />}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/nopage" element={<NoPage />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
      </Routes>
    </AuthProvider>
      </>
  );
}

function UserInfo() {
  const { loggedIn, userEmail } = useAuth(); // Use the useAuth hook

  return loggedIn ? <p>Welcome, {userEmail}!</p> : null;
}

