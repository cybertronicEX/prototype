import React ,{ useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import "./Navbar.css"
import  { IconContext } from 'react-icons';
import { useAuth } from './AuthContext'; // Import the useAuth hook
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { loggedIn, userEmail, logout } = useAuth(); // Use the userEmail
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <>
    <IconContext.Provider value={{color :'#fff'}}>
    <div className='Navbar'>
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
        </Link>
    </div>

    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navbar-toggle'>
          < Link to ='#' className='menu-bars'>
            <AiIcons.AiOutlineClose />
          </Link>
        </li>
        {SidebarData.map((item,index) => {
          return(
            <li key={index} className={item.cName}>
              <Link to ={item.path}>
                {item.icon}
                <span>
                  {item.title}
                </span>
              </Link>
            </li>
          )
        })}
        {/* <li> */}
        
            
        {/* </li> */}
      </ul>
      {loggedIn && (
                <div className="logoutbuttoncontaier">
                  <button  className="logoutbutton" onClick={handleLogout}>Logout</button>
                </div>
              )}
    </nav>
    </IconContext.Provider>
    {/* <nav>
      <ul>
        <li>
          <Link to ="/">Home</Link>
        </li>
        <li>
          <Link to ="/order">Order</Link>
        </li>
        <li>
          <Link to ="/nopage">NoPage</Link>
        </li>
      </ul>
    </nav> */}
    </>
  )
}

export default Navbar