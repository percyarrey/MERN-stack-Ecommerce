import React from 'react'
//REACT ICONS
import {FaPlus ,FaMinus ,FaTrash} from 'react-icons/fa'

//REACT REDUX
import { useDispatch, useSelector } from 'react-redux'
import { changeCartData } from '../redux/cartSlice'

export default function Cartcard(props) {
  //REACT REDUX
  const dispatch = useDispatch()
  var cartData = useSelector((state)=>state.cart.cartList)
  var newcartData = cartData.filter(item=>(item._id)===props.id)      
  newcartData = newcartData[0]
  //MY FUNCTION
  function handleDecrease() {
    var quantity = newcartData.quantity>1?newcartData.quantity - 1 : 1;
    var total = quantity*newcartData.price
    quantity = {
      ...newcartData,
      quantity:quantity,
      total:total
    }
    cartData = cartData.map((k)=>{
        if(k._id===props.id){
          return quantity
        }else{
          return k
        }
    })
    dispatch(changeCartData(cartData))
  }
  function handleIncrease() {
    var quantity = newcartData.quantity + 1;
    var total = quantity*newcartData.price
    quantity = {
      ...newcartData,
      quantity:quantity,
      total:total
    }
    cartData = cartData.map((k)=>{
        if(k._id===props.id){
          return quantity
        }else{
          return k
        }
    })
    dispatch(changeCartData(cartData))
  }
  function handleDelete() {
    cartData= cartData.filter((k)=>k._id!==props.id)
    dispatch(changeCartData(cartData))
  }
  return (
    <div className='bg-secondary mt-1 border border-1 border-dark-subtle bg-opacity-25 p-2 rounded-2'>
        <div className='d-flex' style={{height:"8rem"}}>
          <div className=' overflow-hidden h-100 d-flex align-items-center bg-white'>
            <img src={props.image} width={200} height={200} className=' img-fluid'/>
          </div>
          <div className=' d-flex justify-content-between  w-100'>
            <div className='ps-2 d-flex justify-content-between flex-column'>
              <div>
              <div className=' fw-semibold text-muted fs-5'>{props.productname}</div>
              <div className=' fw-semibold text-muted fs-6'>{props.category}</div>
              <div className='fs-5'>{props.price}frs</div>
              </div>
              <div>
              <div className='d-flex align-items-center  gap-2'>
                <button onClick={handleDecrease} className='btn bg-secondary bg-opacity-50 p-2 py-1'><FaMinus size={15}/></button>
                  <div className='fw-bold fs-5'>
                    {
                      newcartData.quantity
                    }
                  </div>
                <button onClick={handleIncrease} className='btn bg-secondary bg-opacity-50 p-2 py-1'><FaPlus size={15}/></button>
              </div>
              </div>
            </div>
            <div className='d-flex justify-content-between flex-column'>
              <div className='d-flex justify-content-end'>
                <FaTrash color='red' onClick={handleDelete} cursor={"pointer"}/>
              </div>
              <div>
                <div className='fw-bold fs-5'>
                  Total: {newcartData.total}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
