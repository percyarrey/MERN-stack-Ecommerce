import React, { useState } from 'react'
//COMPONENT
import Editproductcard from '../component/Editproductcard'

//REACT REDUX
import { useSelector } from 'react-redux'

function Editproduct() {
  const [pageNum,setpageNum] = useState(10)
  const [pageClass,setpageClass] = useState("")
  //REACT REDUX
  const userData = useSelector((state)=>state.user.user)
  const productData = useSelector((state)=>state.product.productList)
  return (
    <div className=' container-fluid'>
        <div className='fs-2 fw-bold'>Edit products</div>
        {
          productData.length!==0 && userData.fname!==undefined?
            <div className='row gy-3 justify-content-center'>
              <div className='col-12 col-sm-11 col-md-9 col-lg-8'>
                {productData.map((productData,index)=>{
                    if(index<=pageNum){

                      return <Editproductcard key={index} id={productData._id} productname={productData.productname} image={productData.image} category={productData.category} price={productData.price}/>
                    }
                })} 
                <div className={'d-flex justify-content-center mt-3 '+pageClass}>
                  <button onClick={(()=>{
                    if(pageNum>=productData.length){
                      setpageClass("d-none")
                    }
                    setpageNum(prev=>{
                    return prev + 10
                  })})} className=' btn btn-outline-success rounded-pill px-5 '>Show More</button>
                </div>
              </div>
            </div>
            : 
            <div className='fs-2 fw-bold d-flex justify-content-center w-100 align-items-center'  style={{height:"80vh"}}>
              Your are have not Signup 
            </div>
        }
            
    </div>
  )
}

export default Editproduct