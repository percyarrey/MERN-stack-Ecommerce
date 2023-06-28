import React from 'react'
import { ImagetoBase64 } from '../utility/ImagetoBase64'
//GIF
import loginsignupimage from '../assets/login-animation.gif'

//REACT ICONS
import {BiHide,BiShow} from 'react-icons/bi'
import { Link,useNavigate } from 'react-router-dom'
//IMPORT TOASTER
import { toast } from 'react-hot-toast'

function Signup() {
    /* NAVIGATION */
    const navigate = useNavigate()

    const [Spwd,setSpwd]=React.useState(false)
    const [warning,setWarning]=React.useState("")
    const [data,setdata]=React.useState({
      fname:"",
      lname:"",
      email:"",
      pwd:"",
      cpwd:"",
      profilepic:""
    })

    const HandleSpwd=()=>{
        setSpwd(prev=>!prev)
    }
    const [SCpwd,setSCpwd]=React.useState(false)
    const HandleSCpwd=()=>{
        setSCpwd(prev=>!prev)
    }

    const handledata=(e)=>{
      const{name,value}=e.target
      setdata((prev)=>{
        return{
            ...prev,
            [name]:value
        }
      })
    }

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
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const {fname,lname,email,pwd,cpwd}=data
        if(fname&&lname&&email&&pwd&&cpwd){
          if(pwd.length>4){
            if(pwd==cpwd){
              const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`,{
                method: "POST",
                headers:{
                  "content-type" : "application/json"
                },
                body: JSON.stringify(data)
              })
              
              const dataRes = await fetchData.json()
              if(dataRes.message=="Email already Exist"){
                setWarning("Email already Exist")
                toast("Email already Exist")
              }else{
                if(dataRes.message=="Successfully sign Up!"){
                  toast("Successfully sign Up!")
                  navigate("/login")
                }else{
                  setWarning("Something went wrong")
                  toast("Something went wrong")
                }   
              }
            }
            else{
              setWarning("Password and confirm password not equal")
              toast("Password and confirm password not equal")
            }
          }else{
            setWarning("Password should be more than 5 character")
            toast("Password should be more than 5 character")
          }
        }else{
          setWarning("Please enter required fields")
          toast("Please enter required fields")
        }
    }
  return (
    <div className='w-100 d-flex justify-content-center align-items-center'>
        <div className=' shadow rounded-3' style={{maxWidth:"28rem",paddingLeft:"2rem",paddingRight:"2rem",paddingBottom:"1.2rem",backgroundColor:"white"}}>
            <form onSubmit={handleSubmit}>
              <div className='d-flex justify-content-center  mt-2'>
                <div className='rounded-circle shadow-sm d-flex justify-content-center align-items-center' style={{width:"6rem",overflow:"hidden",height:"5.7rem"}}>
                    <label htmlFor="uploadimg" className=" form-label m-0 ms-0 g mt-3 fw-bold"><img src={data.profilepic?data.profilepic:loginsignupimage} height={80}/></label>
                    <input name='profilepic' type="file" accept='image/*' className='d-none' id='uploadimg' onChange={handleprofileimage}/>
                </div>
              </div>
              <div className=' d-flex justify-content-center'><small className=' text-center'><label htmlFor='uploadimg'>click to upload an image(optional)</label></small><br/></div>

              <div className='text-center mt-2 text-danger'>{warning}</div>
              
              <label htmlFor="fname" className="form-label m-0 g mt-0 fw-bold">First Name</label>
              <input type="text" style={{height:"2.3rem"}} className=" w-100 bg-light rounded-1" name="fname" id="fname" placeholder="" onChange={handledata} value={data.fname}/>

              <label htmlFor="lname" className="form-label m-0 g mt-3 fw-bold">Last Name</label>
              <input type="text" style={{height:"2.3rem"}} className=" w-100 bg-light rounded-1" name="lname" id="lname" placeholder="" onChange={handledata}   value={data.lname}/>

              <label htmlFor="email" className="form-label m-0 g mt-3 fw-bold">Email</label>
              <input type="email" style={{height:"2.3rem"}} className=" w-100 bg-light rounded-1" name="email" id="email" placeholder=""  onChange={handledata}  value={data.email}/>

              <label htmlFor="pwd" className="form-label m-0 g mt-3 fw-bold">Password</label>
              <div className='d-flex'>
                <input type={Spwd ? "text":"password"} style={{height:"2.3rem"}} className=" bg-light rounded-1 w-100" name="pwd" id="pwd" placeholder=""  onChange={handledata}  value={data.pwd}/><span className=' position-relative' style={{right:40,width:0,cursor:"pointer"}} onClick={HandleSpwd}><span className="d-flex"  style={{width:31}}>{Spwd ?<BiShow size={30}/>:<BiHide size={30}/>}</span></span>
              </div>

              <label htmlFor="Cpwd" className="form-label m-0 g mt-3 fw-bold">Confirm Password</label>
              <div className='d-flex'>
                <input type={SCpwd ? "text":"password"} style={{height:"2.3rem"}} className=" bg-light rounded-1 w-100" name="cpwd" id="Cpwd" placeholder=""  onChange={handledata}  value={data.cpwd}/><span className=' position-relative' style={{right:40,width:0,cursor:"pointer"}} onClick={HandleSCpwd}><span className="d-flex"  style={{width:31}}>{SCpwd ?<BiShow size={30}/>:<BiHide size={30}/>}</span></span>
              </div>

              <div className='d-flex justify-content-center'>
                <button type='submit' className='btn px-5 mt-2 btn-danger rounded-pill'>SignUp</button>
              </div>
              <p className='text-center mt-2'>Already have account ? <Link to={"/login"}>Login</Link></p>
            </form>
        </div>
    </div>
  )
}
export default Signup