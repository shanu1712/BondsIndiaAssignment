import {React,useEffect, useState} from 'react'
import axios from 'axios'
import { add } from '../store/cartSlice'
import { useDispatch } from 'react-redux'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
const Products = () => {
    const navigate =useNavigate()
    const dispatch =useDispatch()    //// dipatch method//
    const [products,setProduct] =useState([])
    async function fetchData() {
        let response = await axios("https://fakestoreapi.com/products/");    //fetching data from api//
        let product = response.data;
        setProduct(product);
        console.log(product);
    }
    
    useEffect(() => {
        fetchData();
    }, [])
     

    ////handlebuy//
    const handlebuy =(ele)=>{
       dispatch(add(ele))
       navigate('/payment')
    }

    
  return (
    <div>
        <Navbar/>
      <h1>Products</h1>
      {
        products.map((ele)=>{
            return (
            <div className='card' key={ele.id}>
            <div><b>Product</b> {ele.id}</div> 
            <div>{ele.title}</div>
            <div>{ele.description}</div>
            <img src={ele.image} style={{width:"130px",height:"130px"}}/>
            <div><b>Price Of This Item is:{ele.price}</b></div>
             <button onClick={()=>handlebuy(ele)}>Buy Now</button>
          
            </div>)
        })
      }

    </div>
  )
}

export default Products
