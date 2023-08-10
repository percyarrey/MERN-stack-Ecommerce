import React, { useEffect, useRef, useState } from 'react'

//REACT REDUX
import { setDataProduct } from '../redux/productSlice'
import {useDispatch, useSelector} from 'react-redux'

//IMPORT IMAGE 
import bike from '../assets/bike.jpg'

//COMPONENT
import Herocard from '../component/Herocard'


//SPINNER
import {PropagateLoader,MoonLoader} from 'react-spinners'

//SWIPER JS
import Slider from '../component/Slider'

//REACT ICONS
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import Menucomponent from '../component/Menucomponent'

//REACT ROUNTING
import { Link } from 'react-router-dom'

function Home() {
  
  //REACT REDUX
  const productData = useSelector((state)=>state.product.productList)

  const sliderRef = useRef(null)

  //HANDLE NEXT AND PREVIOUS
  const handleSlide = (e) =>{
    var direction;
    if(e.target.id==='1'){
      direction = 1
    }else{
      direction=-1
    }
    if(sliderRef!=undefined && sliderRef.current!=undefined && sliderRef.current!=null){
      sliderRef.current(direction)
    }
  }

  return (
    <div>
      {/* HERO */}
      <div style={{minHeight:"80vh"}}>
        <div className='h-100 row gy-3'>
            <div className='col-12 col-lg-6'>
              <span className='px-2  rounded-pill bg-secondary  bg-opacity-10 fw-semibold'>Bike Delivery <img height={13} src={bike} /></span>
              <div  className='h-70 d-flex align-items-center'>
                <div>
                  <h1 className='mt-5 display-3 fw-bolder'>The Fasted Delivery in <span className=' text-danger'>Your Home</span></h1>
                <p className='mt-3'>
                The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Link to={'menu/64a2eb4649f59bbcd19c33d6'} className='btn btn-outline-danger mt-2 px-5'>Order Now</Link>
                </div>
              </div>
            </div>
              { productData.length!=0?
              <div className='col-12 col-lg-6 d-flex align-items-center'>
                <div className='row gy-2 justify-content-center gx-1 gx-lg-2'>
                {
                  productData.map((k,index)=>{
                    if(index<4){
                      return <Herocard id={k._id} key={index} image ={k.image} productname={k.productname}  price={k.price}/>
                    }
                  })
                }
                </div>
              </div>:
                <div className='col-12 col-lg-6 d-flex align-items-center justify-content-center'>
                  <MoonLoader/>
                </div>
              }
        </div>
      </div>
      {/* FRESH VEGETABLES */}
      <div className='mt-3 p-0'>
        <div className=' d-flex justify-content-between'>
          <div className='fw-bolder fs-4'>Fresh Vegetables</div>
          <div>
          <button id="-1" onClick={handleSlide} className=' btn py-1 px-1 me-2 border border-1 bg-secondary bg-opacity-10 fw-bold'>
              <FiChevronLeft id="-1" size={30}/>
            </button>
            <button id="1" onClick={handleSlide} className=' border border-1  btn py-1 px-1 bg-secondary bg-opacity-10 fw-bold'>
              <FiChevronRight id="1" size={30}/>
            </button>
          </div>
        </div>
        <div className='mt-1 mywidth' style={{minHeight:"272px"}}>
            {
              productData!=0?
              <Slider sliderRef={sliderRef}/>:
              <div className='w-100 d-flex align-items-center justify-content-center'  style={{maxWidth:"92vw",minHeight:"272px"}}>
                  <PropagateLoader/>
              </div>
            }
        </div>
      </div>
      {/* YOUR PRODUCT */}
      <div className='mt-2'>
          <div className='fw-bolder fs-4'>Your Product</div>

          <Menucomponent/>
      </div>
    </div>
  )
}

export default Home