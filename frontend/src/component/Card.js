import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

//SCROLLSPY
import {animateScroll as scroll} from 'react-scroll'

//REACT REDUX
import { addCartData } from '../redux/cartSlice'
import {useDispatch,useSelector} from 'react-redux'
//REACT TOASTER
import {toast} from 'react-hot-toast'
function Card(props) {
  //REACT REDUX
  const dispatch = useDispatch()
  const cartData = useSelector((state)=>state.cart.cartList)
  const productData = useSelector((state)=>state.product.productList)
  //ROUNTING VARIABLE
  const loc=useLocation()
  const pathname = loc.pathname
  const menuPath = pathname.slice(0,5)
  //NAVIGATION
  const navigate = useNavigate()
  //HANDLE CLICK
  function handleClick(e) {
    if(e.target.name=="addCart"){
      if(cartData.filter((e) =>e._id===props.id).length===0){
            var newcartData = productData.filter(item=>(item._id)===props.id)
            newcartData = newcartData[0]
            newcartData = {
              ...newcartData,
              quantity:1,
              total:props.price
            }
            newcartData=[...cartData,newcartData]
            dispatch(addCartData(newcartData))
            toast("Product added to Cart")
      }
    }else if(e.target.name=="removeCart"){
      if(cartData.filter((e) =>e._id===props.id).length!==0){
            var newcartData = cartData.filter(item=>(item._id)!==props.id)
            dispatch(addCartData(newcartData))
            toast("Product removed from Cart")
      }
    }else{
      scroll.scrollToTop({
        duration:1000,
        smooth:true,
      })
      setTimeout(() => {
        navigate("/menu/"+props.id)
      }, 700);
    }
  }
  return (
    <div className='pb-3'>
        <div to='menu' className="card Hoverimg h-100 shadow-sm" onClick={handleClick}  style={{maxWidth:"15rem",maxHeight:"17rem",backgroundColor:"white",cursor:"pointer"}}>
            <div className='overflow-hidden d-flex align-items-center justify-content-center'  style={{height:'10rem'}}>
                <img className="card-img-top" src={props.image}  alt="Title"/>
            </div>
            <div className=" card-body py-1 d-flex align-items-center">
                <div className='w-100 mb-1'>
                <h4 className="card-title fs-5">{props.productname}</h4>
                <h6 className='text-muted'>{props.category}</h6>
                <p className="card-text"><span className=' fw-bolder'>{props.price}</span>frs</p>
                {
                 cartData.filter((e) =>e._id===props.id).length===0? <button name="addCart" className='btn btn-danger w-100'>Add Cart</button>:
                  <button name="removeCart" className='btn bg-danger bg-opacity-25 w-100'>Remove</button>
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card