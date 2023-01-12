// import logo from '../logo.svg';
import '../css/home.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';

// import { Outlet, Link } from "react-router-dom";
export default function Home(){
    return(
        <div className='Base'>
            {/* <div className='Rname1'>
                <h1 >THE GLAMOUR Resturant & Tea lounge</h1>
            </div> */}
            <div className='intro'>
                <div className='image'>
                    <img className='slideshow' src="https://images8.alphacoders.com/118/1183004.jpg" alt='sda'/>
                </div>
                <div className='text'>
                    <p  >this is blah blah blah should edit this later on .. not so important rn . work more on the nav bar (maybe on the side that can pop out) image transition and footer go easy with color scheme</p>
                </div>
            </div>
            <div className='orderbutton'>
                {/* <nav> */}
                    {/* <button variant="primary">Primary</button>{' '} */}
                    {/* <button className='button1'Link to='/Order'order ></button>
                    
                </nav>
                <Outlet/> */}
            </div>
        </div>
    );
}

// // export default Home();