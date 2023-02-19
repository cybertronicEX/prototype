import  Axios  from 'axios'
import React ,{useEffect}from 'react'
import "../css/cart.css"
import {useState} from  'react'

export default function Cart() {
  const [listofcart,setlistofcart] = useState([])
  useEffect(()=>{
    Axios.get("http://localhost:3001/CartsBE/getCart").then((response)=>{
      setlistofcart(response.data)
      // console.log(listofcart.foodId);
    })
   }, []) 
    
 
  return (
    <div className='cartbox'>
      <p className='p'>need an setcart function .through axios have to set the details in a new schema and then call it from cart. through a get method via axios </p>
        <div>
          <h1>cart</h1>
          {listofcart.map((meh)=>{
            return <div className='menu' key={meh._id}>
              <div className='d_item'>{meh.foodid}</div>
              <div className='d_item'>{meh.price}</div>
              <img className='foodimage'src={meh.image} alt="blah"/>
            </div>
          })}
        </div>
      </div>
  )
}
