import React from 'react'

//HOT TOAST
import { toast } from 'react-hot-toast'
//REACT ICONS
import {FaPlus ,FaMinus ,FaTrash} from 'react-icons/fa'
//REACT REDUX
import { useDispatch } from 'react-redux'
import { setDataProduct } from '../redux/productSlice'
//REACT ROUTER
import { useNavigate } from 'react-router-dom'

export default function Editproductcard(props) {

  //USE DISPATCH
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //MY FUNCTION
  async function handleDelete() {
    console.log(props.id)
    const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/deleteproduct`,{
      method: "POST",
      headers:{
        "content-type" : "application/json"
      },
      body: JSON.stringify({id:props.id})
    }).then((res)=>{
      return res.json()
    })
      .catch((e)=>{
        return e
    })
    const dataRes = await fetchData
    if(dataRes.message=="Delete failed"){
      toast("Product Delete Failed")
    }else{
      if(dataRes.message=="Delete Product Successfully"){
        console.log(dataRes)
        toast("Delete Product Successfully")
        dispatch(setDataProduct(dataRes.data))
      }else{
        toast(dataRes.message)
      }   
    }
  }
   function handleEdit() {
    navigate("/editproduct/"+props.id)
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
              <div className='d-flex justify-content-between w-100 align-items-center  gap-5'>
                <button onClick={handleDelete} className='btn btn-danger px-4'>Delete</button>
                  
                <button onClick={handleEdit} className='btn btn-primary px-5'>Edit</button>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
