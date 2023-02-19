// import logo from '../logo.svg';
import '../css/home.css';
import pic from "../imgs/ad.jpg";
import pic2 from "../imgs/214396.jpg"
import pic3 from "../imgs/one-piece-4k-2g.jpg"
import Slider from "react-animated-slider"
import 'react-animated-slider/build/horizontal.css';
// import {useHistory} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import Navbar from '../components/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';

// import { Outlet, Link } from "react-router-dom";
export default function Home(){
    // const navigate = useNavigate;
    const images =[
        {title:'blah',image:pic},
        {title:'meh' ,image:pic2},
        {title:'bleh' ,image:pic3},
    ];
   
  

    return(
        <div className='Base'>
          
            <div className='intro'>
                <div className='image'>
                    <Slider className="slider-wrapper">
                        {images.map((item, index) =>(
                        <div   
                            key={index}
                            className="slider-content"
                            style={{ background: `url('${item.image}') no-repeat center center` }}
                            />

                            ))}
                    </Slider>
                  
                  {/*            
                        <img className='slideshow' src={pic} alt='sda'/>
                        <img className='slideshow' src={pic2} alt='sdda'/>
                  */}

                </div>
                <div className='text'>
                    <p  >this is blah blah blah should edit this later on .. not so important rn . work more on the nav bar (maybe on the side that can pop out) image transition and footer go easy with color scheme</p>
                    {/* <button className='orderRedirect' onClick={()=>navigate("/order")}>Let's Get Started</button> */}
                    <div className='rbutton'>
                        <Link className='redirectbutton' to='/order'>Lets get started</Link>
                    </div>
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