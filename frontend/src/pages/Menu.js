import React from 'react'

//ROUTER
import { useNavigate, useParams } from 'react-router-dom'

//COMPONENT
import Menucomponent from '../component/Menucomponent'
//REACT SCROLL
import {Element} from 'react-scroll'
//REACT REDUX
import { addCartData } from '../redux/cartSlice'
import { useSelector ,useDispatch} from 'react-redux'
//REACT TOASTER
import { toast } from 'react-hot-toast'

function Menu() {
  //REACT ROUTER
  const {id} = useParams()
  const navigate = useNavigate()
  //REACT REDUX  
  const productData = useSelector((state)=>state.product.productList)
  const dispatch = useDispatch()

  const cartData = useSelector((state)=>state.cart.cartList)
  //FILTERED DATA
  const filterData= ()=>{
      const Fdata = (productData.filter(item=>(item._id)===id))[0]
      return (Fdata===undefined ?productData[0]:Fdata) 
  } 
  //HANDLE CLICK
  function handleClick(e) {
    if(e.target.name=="addCart"){
      if(cartData.filter((e) =>e._id===filterData()._id).length===0){
            var newcartData = productData.filter(item=>(item._id)===filterData()._id)
            newcartData = newcartData[0]
            newcartData = {
              ...newcartData,
              quantity:1,
              total:filterData().price
            }
            newcartData=[...cartData,newcartData]
            dispatch(addCartData(newcartData))
            toast("Product added to Cart")
      }
    }else if(e.target.name=="removeCart"){
      if(cartData.filter((e) =>e._id===filterData()._id).length!==0){
            var newcartData = cartData.filter(item=>(item._id)!==filterData()._id)
            dispatch(addCartData(newcartData))
            toast("Product removed from Cart")
      }
    }
  }
  //HANDLE BUY
  function handleBuy(e) {
    var newcartData = productData.filter(item=>(item._id)===filterData()._id)
    newcartData = newcartData[0]
    var cherk = cartData.filter(e=>(e._id)===newcartData._id)
    if(cherk.length===0){
      newcartData = {
      ...newcartData,
      quantity:1,
      total:filterData().price
      }
      newcartData=[...cartData,newcartData]
      dispatch(addCartData(newcartData))
    }
    
    setTimeout(() => {
      navigate("/cart")
    }, 80);
  }

  return (
    <Element name='menu' className='px-md-5 w-100 pt-3'>
      <div className='bg-white rounded-3 container-fluid shadow-sm'>
        {
          filterData()!=undefined&&
            <div className='row Hoverimg'>
            <div className='col-12 col-sm-6 d-flex justify-content-center overflow-hidden'>
              <img src={filterData().image} className='menuimg object-fit-contain'/>
            </div>
            <div className='col-12 col-sm-6 pt-4'>
              <div className='fs-2 fw-bold text-muted'>{filterData().productname}</div>
              <div className='fs-4 fw-semibold text-muted'>{filterData().category}</div>
              <div className='fs-4 fw-semibold'>{filterData().price}frs</div>
              <div className='mt-2' onClick={handleClick}>
                <button onClick={handleBuy} className='btn btn-danger px-4 px-lg-5'>Buy</button>
                {
                  cartData.filter((e) =>e._id===filterData()._id).length===0?<button name='addCart' className='btn btn-danger ms-3 px-3 px-lg-4'>Add cart</button>:
                  <button name='removeCart' className='btn bg-danger bg-opacity-25 ms-3 px-3 px-lg-4 px-lg-5'>Remove</button>
                }
              </div>
              <div className='mt-1'>
                <span className='fw-bold fs-6'>Description:</span><br/>{filterData().description}
              </div>
            </div>
           </div>
        }
      </div>
      <div className='mt-4'>
        <Menucomponent/>
      </div>
    </Element>
  )
}

export default Menu