
import React from 'react'
import '../css/order.css'
import { useState, useEffect } from 'react'
import Axios  from 'axios';
import { Link } from 'react-router-dom';


// import Cart from './cart';
// import Select from 'react-select';




export default function Order(){
      
    const[foodlist,setfoodlist]=useState([]);
    const[_id,setid]=useState("");
   
    
  
    // const[_id,set_id]=useState('');
    const [cart,setCart]=useState([]);
    const [warning,setWarning]=useState(false);
    // const [foodId,setfoodId]=("")
    // const [name,setname]=("")
    // const [price,setprice]=("")
    // const [type,settype]=("")
    // const [ingredients,setingredients]=("")
    // const [image,setimage]=("")
   
    // const options=[
    //     {value : '1' ,label :'1'},
    //     {value : '2' ,label :'2'},
    //     {value : '3' ,label :'3'},
    //     {value : '4' ,label :'4'},
    //     {value : '5' ,label :'5'},
    //     {value : '6' ,label :'6'}
    // ]
    // const handleChange = (selectedOption) =>{
     
    //     console.log("handlechange",selectedOption);
        
      
    // }
//    const[options1,setoptions1] = useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:3001/getFood').then((response) => {
            setfoodlist(response.data)
            // console.log(response.data)
            
            // const options1= response.data.map ( (amount)=>(
            //     {value : amount._id  ,label :'3'}
            //     ))
            //     console.log(options1);
            //     setoptions1(options1)
            
        })
    }, [])

    const handleClick =  (item) => {
        // event.preventDefault();
        let isPresent = false;
        cart.forEach ((product)=>
            {
            if (item._id === product._id){
                isPresent = true;
                
            }
        });
        // setCart([...cart,val])
        // cart.push(val);
        // console.log(formdata)
        if(isPresent){
            setWarning(true);
            setTimeout(()=>{
                setWarning(false);
            },2000);
            alert('already added');
            
            return;
        }
    
        setCart([...cart, item]);

        // setfoodId([...foodId, item._id])
        // console.log(cart);

        if (isPresent === false){
            Axios.post('http://localhost:3001/cartsBE/addCart',{
                foodid :item._id,
                price :item.price,
                image :item.image,
                 }).then((response)=>{
                    alert("added to cart");
                    // Axios.get('http://localhost:3001/getFood').then((response) => {
                    //     setfoodlist(response.data) ;
                    // })
                    // console.log(foodId);
                    
                })
        }

        // Axios.post('http://localhost:3001/cartsBE/addCart',{
        // foodId :item._id,
        // price :item.price,
        //  }).then((response)=>{
        //     alert("added to cart");
        //     Axios.get('http://localhost:3001/getFood').then((response) => {
        //         setfoodlist(response.data) ;
        //     })

            
        // })
   
       
        // return [cart];
 
       
    }
    
    // const additem = async (event) =>{
    //     event.preventDefault();
    //     let formdata = {
    //         foodID :event.target[0].value,
    //         name : event.target[1].value,
    //         price : event.target[2].value,
    //         type :event.target[3].value,
    //         ingredients :event.target[4].value,
    //         image :event.target[5].value
    //     }

    //     console.log({name :name ,price: price ,type:type , ingredients:ingredients ,image:image})
    // }
    return(
        
        <div className='orderBase'>
           
            <div className='ordercontent'>
                {foodlist.map((val)=>{ 
                return <div key={val._id} className='menu'>
                    <img  className="foodimage"src={val.image} alt={val.name}/>
                        <div className='description'>
                            {/* <div key={val._id}> */}
                            <div className='d_item'> {val.name}</div>
                            <div className='d_item'>{val.price}</div>
                            <div className='d_item'>{val.type}</div>
                            <div className='d_item'>{val.ingredients}</div>
                        {/* <Select className='dropdown' placeholder={'amount'}  options={options1}  ismulti onChange={handleChange}>
                            </Select> */}
                        {/* <form onSubmit={additem}> */}
                            <button onClick={()=>{handleClick(val,_id);} }  type={'submit'} 
                            // onChange={(event)=>{
                            //     setfoodId(event.target[0].value);
                            //     setname(event.target[1].value);
                            //     setprice(event.target[2].value);
                            //     settype(event.target[3].value);
                            //     setimage(event.target[4].value);
                            //     setingredients(event.target[5].value) }}
                                 className='ddbtn'>add to cart</button>
                            <Link className='redirectbutton' to='/cart'>go to cart</Link>
                            {/* <Cart listofItems={{cart}}/> */}
                            {/* <></> */}
                        {/* </form> */}
                            {/* </div> */}
                            </div>
                        </div>
                    })}

            </div>   
        </div> 
    );
  
}

// // export default Order();