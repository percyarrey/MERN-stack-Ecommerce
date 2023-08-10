import React, { useEffect, useState } from 'react'
//COMPONENTS
import Menuslider from './Menuslider'
import Card from './Card'
//REACT REDUX
import { useSelector } from 'react-redux'

//REACT SPINNER
import {ClipLoader} from 'react-spinners'

function Menucomponent() {
    //MOUNTED
    const [isMounted,setisMounted] = useState(false)
    useEffect(()=>{
        setisMounted(true)
    })
    const productData = useSelector((state)=>state.product.productList)
    const [activeCategory,setActiveCategory] = useState("All")
    //HANDLE TAB
    const handleClick=(e)=>{
        setActiveCategory(e.target.closest('button').name)
    }
    //FILTERED DATA
    const filterData= ()=>{
        if(activeCategory==='All'){
            return productData
        }else{
            return productData.filter(item=>(item.category).toLowerCase()===(activeCategory.toLowerCase())) 
        }
      } 
  return (
    <div>
        {/* TAB */}
        <div className='mywidth1 px-0  px-md-5 pe-lg-0 d-flex justify-content-center'>
            <Menuslider activeCategory={activeCategory} handleClick={handleClick}/>
        </div>
        <div className='row mt-4 myMenu'>
            {productData.length!=0 && isMounted?
                filterData().map((k, index) => (
                    <div className='col-6 col-sm-4 col-md-4 col-lg-2' key={index}>
                        {<Card id={k._id} key={index} category={k.category} image ={k.image} productname={k.productname}  price={k.price}/>}
                    </div>
                )):
                <div className='w-100 d-flex align-items-center justify-content-center'  style={{maxWidth:"92vw",minHeight:"272px"}}>
                  <ClipLoader/>
              </div>
            }
        </div>
    </div>
  )
}

export default Menucomponent