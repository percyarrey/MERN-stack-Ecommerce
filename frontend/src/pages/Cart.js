import React from 'react'
//COMPONENT
import Cartcard from '../component/Cartcard'

//REACT REDUX
import { useSelector } from 'react-redux'

function Cart() {
  //REACT REDUX
  const cartData = useSelector((state)=>state.cart.cartList)
  function Qty(){
    var qty = 0;
    cartData.forEach(e => {
      qty = e.quantity + qty
    });
    return qty;
  }
  function Price(){
    var price=0;
    cartData.forEach(e => {
      price = e.total + price
    });
    return price;
  }
  return (
    <div className=' container-fluid'>
        <div className='fs-2 fw-bold'>Your cart items</div>
        {
          cartData.length!==0?
            <div className='row gy-3'>
              <div className='col-md-8 col-12'>
              {cartData.map((productData,index)=>{
                  return <Cartcard key={index} id={productData._id} productname={productData.productname} image={productData.image} category={productData.category} price={productData.price}/>
              })} 
              </div>
              <div className='col-md-4 px-3 px-sm-5 px-md-1 col-12'>
                <div className='w-100 border-1 border rounded-1'>
                  <div className='w-100 fw-semibold bg-primary py-2'>Summary</div>
                  <div className='w-100 d-flex justify-content-between  py-2'>
                    <div>Total Qty</div>
                    <div>{Qty()}</div>
                  </div>
                  <div className='w-100 d-flex justify-content-between  py-2'>
                    <div>Total Price</div>
                    <div>{Price()} frs</div>
                  </div>
                  <button className='w-100 btn btn-danger'>Make payment</button>
                </div>
              </div>
            </div>
            : 
            <div style={{minHeight:"50vh"}} className='d-flex text-danger fw-bold align-items-center justify-content-center'>
            You have No Cart Avaliable 
        </div>
        }
            
    </div>
  )
}

export default Cart