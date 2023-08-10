import React from 'react'
import { BiSolidCloudUpload } from 'react-icons/bi'

import { ImagetoBase64 } from '../utility/ImagetoBase64'

//REACT SPINNER
import { toast } from 'react-hot-toast'
//REACT REDUX
import {useSelector} from 'react-redux'

//REACT SPINNER
import { TailSpin } from 'react-loader-spinner'
//NAVIGATOR
import { useNavigate } from 'react-router-dom'

function Addproduct() {
  //REDUX DATA
  const userData = useSelector((state)=>state.user.user)
  /* NAVIGATION */
  const navigate = useNavigate()
  //REACT HOOK DECLARATION
  const [saveSpinner,setSaveSpinner]=React.useState(false)
  const [data,setdata]=React.useState({
    productname:"",
    category:"",
    image:"",
    price:0,
    description:""
  })
  const [warning,setWarning]=React.useState("")
  //HANDLE DATA
  const handledata=(e)=>{
    const{name,value}=e.target
    setdata((prev)=>{
      return{
          ...prev,
          [name]:value
      }
    })
  }
  //HANDLE IMAGES
  const handleprofileimage= async(e)=>{
    const data = await ImagetoBase64(e.target.files[0])
    const{name}=e.target
    setdata((prev)=>{
      return{
          ...prev,
          [name]:data
      }
    })
  }
  //HANDLE SUBMIT
  const handleSubmit =async(e)=>{
    e.preventDefault()
    const {productname,category, image, price, description}=data
    if(!saveSpinner){
      if(productname && image&& price && description){
        if(category!="none"){
          if(price>0){
            setSaveSpinner(true)
            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/addproduct`,{
              method: "POST",
              headers:{
                "content-type" : "application/json"
              },
              body: JSON.stringify(data)
            }).then((res)=>{
              setSaveSpinner(false)
              return res.json()
            })
              .catch((e)=>{
                setSaveSpinner(false)
                return e
            })
            const dataRes = await fetchData
            console.log(dataRes)
                if(dataRes.message=="Product already Exist"){
                  setWarning("Product already Exist")
                  toast("Product already Exist")
                }else{
                  if(dataRes.message=="Product Successfully Uploaded"){
                    toast("Product Successfully Uploaded")
                    setWarning("")
                  }else{
                    setWarning(dataRes.message)
                    toast(dataRes.message)
                  }   
                }
          }else{
            setWarning("Enter an appropriate price")
            toast("Enter an appropriate price")
          }
        }else{
          setWarning("Select a Category")
          toast("Select a Category")
        }
    }else{
      setWarning("Please enter required fields")
      toast("Please enter required fields")
    }
    }
  }
return (
  <div className='w-100 d-flex justify-content-center align-items-center'>
      {
        userData.fname!==undefined?
        <div className=' shadow rounded-3' style={{maxWidth:"30rem",paddingLeft:"1rem",paddingRight:"1rem",paddingBottom:"1.2rem",backgroundColor:"white"}}>
            <form onSubmit={handleSubmit} className='mt-4'>
            <div className='text-center mt-2 text-danger'>{warning}</div>
              {/* PRODUCT NAME */}
              <label htmlFor="productname" className="form-label m-0 g mt-0 fw-bold">Product Name</label>
              <input type="text" style={{height:"2.3rem"}} className="w-100 mb-2 bg-light rounded-1 border-1" name="productname" id="productname" placeholder="" onChange={handledata} value={data.productname}/>
              {/* CATEGORY */}
              <label htmlFor="category" className="form-label m-0 g mt-0 fw-bold">Category</label>
              <select type="text" style={{height:"2.3rem"}} className="w-100 bg-light rounded-1 border-1" name="category" id="category" placeholder="" onChange={handledata} value={data.category}>
                <option value={"none"}>select category</option>
                <option value={"fruits"}>Fruits</option>
                <option value={"vegetables"}>Vegetables</option>
                <option value={"icecream"}>Ice cream</option>
                <option value={"pizza"}>Pizza</option>
                <option value={"rice"}>Rice</option>
                <option value={"others"}>Others</option>
              </select>
              {/* IMAGE */}
              <label htmlFor="image" className="form-label mt-1 w-100 m-0 mt-0 fw-bold">Image 
                <div className='w-100 d-flex justify-content-center align-items-center bg-light border border-1 rounded-1' style={{height:"10rem",cursor:"pointer"}}>{data.image ? <img height="100%" src={data.image}/> :<BiSolidCloudUpload size={60}/>}</div>
              </label>
              <input accept='image/*' type="file" style={{height:"0rem"}} className="w-100 bg-light rounded-1 border-1" name="image" id="image" placeholder=""  onChange={handleprofileimage}/>
              {/* PRICE*/}
              <label htmlFor="price" className="form-label m-0 g mt-0 fw-bold">Price<small>(frs)</small></label>
              <input type="number" style={{height:"2.3rem"}} className="w-100 bg-light rounded-1 border-1" name="price" id="price" placeholder=""  onChange={handledata} value={data.price}/>
              {/* DESCRIPTION */}
              <label htmlFor='description' className="form-label m-0 g mt-2 fw-bold">Description</label>
              <textarea rows={2} className='bg-light form-control border border-1 form-control-plaintext' name='description'  onChange={handledata} value={data.description}/>
              {/* SAVE */}
              <button className='w-100 d-flex justify-content-center mt-3 btn btn-danger'>
              {saveSpinner?<TailSpin color='white' width={50} height={28}/>:"Save"}
              </button>
            </form>
        </div>:
        <div className='fs-2 fw-bold'>
          Your are have not Signup 
        </div>
      }
  </div>
)
}

export default Addproduct