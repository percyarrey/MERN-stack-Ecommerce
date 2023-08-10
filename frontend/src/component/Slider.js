// Import Swiper React components
import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation,Scrollbar,Virtual } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//COMPONENT
import Card from '../component/Card'

//React Redux
import { useSelector } from 'react-redux';


const Slider = (props)=>{
  const productData = useSelector((state)=>state.product.productList)
  const sliderRef = useRef(null)
  //HANDLE SLIDE
  function handleSlide(direction) {
    if(sliderRef!=undefined && sliderRef.current!=undefined && sliderRef.current!=null){
      if(direction>0){
        sliderRef.current.slideNext()
      }else{
        sliderRef.current.slidePrev()
      }
    }
  }
  props.sliderRef.current=handleSlide;
  function handleSwiper(swiper){
    sliderRef.current = swiper
  }
  //FILTERED DATA
  function filterData (){
    return productData.filter(item=>item.category==="vegetables")
  } 
  return (
    <Swiper
     onSwiper={handleSwiper}
    direction='horizontal'
    modules={[Virtual,Navigation,Scrollbar]} 
    scrollbar={{
      hide:false,
      draggable:true
    }}
    spaceBetween={5} 
    slidesPerView={2.5}
    navigation={{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev'
    }}
    breakpoints={{
      576: {
        slidesPerView:3.5,
        spaceBetween:5,
      },
      768: {
        slidesPerView: 4.5,
      },
      992: {
        slidesPerView: 6.5,

      },
    }}
    >
      {filterData().map((k, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          {<Card id={k._id} key={index} category={k.category} image ={k.image} productname={k.productname}  price={k.price}/>}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider
