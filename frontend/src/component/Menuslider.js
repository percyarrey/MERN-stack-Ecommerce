// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
//REACT ICONS
import {MdRestaurantMenu} from 'react-icons/md'

export default function Menuslider(props){
  return (
    <Swiper
      direction='horizontal'
      spaceBetween={0}
      slidesPerView={4.5}
      breakpoints={{
        576: {
          slidesPerView:6.5,
          spaceBetween:5,
        },
        650: {
          slidesPerView: 7,
        }
      }}
      className='mywidth1'
    >
      <SwiperSlide className="d-flex justify-content-center">
        <button onClick={props.handleClick} className='btn p-0 m-0 border-0'  name='All'>
                <div className={'btn rounded-circle '+`${props.activeCategory==="All"? "btn-danger" :"btn-outline-danger"}`} ><MdRestaurantMenu color='black' size={25}/></div>
                <div className='fw-bold'>All</div>
        </button>
      </SwiperSlide>
      <SwiperSlide className="d-flex justify-content-center">
        <button onClick={props.handleClick} className='btn p-0 m-0 border-0' name='Vegetables'>
                <div className={'btn rounded-circle '+`${props.activeCategory==="Vegetables"? "btn-danger" :"btn-outline-danger"}`} ><MdRestaurantMenu color='black' size={25}/></div>
                <div className='fw-bold'>Vegetables</div>
            </button>
      </SwiperSlide>
      <SwiperSlide className="d-flex justify-content-center">
        <button  className='btn p-0 m-0 border-0'  name='Fruits'>
                <div onClick={props.handleClick} className={'btn rounded-circle '+`${props.activeCategory==="Fruits"? "btn-danger" :"btn-outline-danger"}`} ><MdRestaurantMenu color='black' size={25}/></div>
                <div className='fw-bold'>Fruits</div>
            </button>
      </SwiperSlide>
      <SwiperSlide className="d-flex justify-content-center">
        <button onClick={props.handleClick} className='btn p-0 m-0 border-0'  name='Icecream'>
                <div className={'btn rounded-circle '+`${props.activeCategory==="Icecream"? "btn-danger" :"btn-outline-danger"}`} ><MdRestaurantMenu color='black' size={25}/></div>
                <div className='fw-bold'><nobr>Ice cream</nobr></div>
            </button>
      </SwiperSlide>
      <SwiperSlide className="d-flex justify-content-center">
        <button onClick={props.handleClick} className='btn p-0 m-0 border-0'  name='Pizza'>
                <div className={'btn rounded-circle '+`${props.activeCategory==="Pizza"? "btn-danger" :"btn-outline-danger"}`} ><MdRestaurantMenu color='black' size={25}/></div>
                <div className='fw-bold'>Pizza</div>
            </button>
      </SwiperSlide>
      <SwiperSlide className="d-flex justify-content-center">
        <button onClick={props.handleClick} className='btn p-0 m-0 border-0'  name='Rice'>
                <div className={'btn rounded-circle '+`${props.activeCategory==="Rice"? "btn-danger" :"btn-outline-danger"}`} ><MdRestaurantMenu color='black' size={25}/></div>
                <div className='fw-bold'>Rice</div>
            </button>
      </SwiperSlide>
      <SwiperSlide className="d-flex justify-content-center">
        <button onClick={props.handleClick} className='btn p-0 m-0 border-0'  name='Others'>
                <div className={'btn rounded-circle '+`${props.activeCategory==="Others"? "btn-danger" :"btn-outline-danger"}`} ><MdRestaurantMenu color='black' size={25}/></div>
                <div className='fw-bold'>Others</div>
            </button>
      </SwiperSlide>
    </Swiper>
  );
};
