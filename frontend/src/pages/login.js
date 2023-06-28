import React from 'react'

//GIF
import loginsignupimage from '../assets/login-animation.gif'

//REACT ICONS
import {BiHide,BiShow} from 'react-icons/bi'
import { Link } from 'react-router-dom'

function Login() {
    const [Spwd,setSpwd]=React.useState(false)
    const [warning,setWarning]=React.useState("")
    const [data,setdata]=React.useState({
      email:"",
      pwd:""
    })

    const HandleSpwd=()=>{
        setSpwd(prev=>!prev)
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

    const handleSubmit=(e)=>{
        e.preventDefault()
        const {email,pwd}=data
        if(email&&pwd){
          alert("succesful")
        }else{
          setWarning("Please enter required fields")
        }
    }
  return (
    <div className='w-100 d-flex justify-content-center align-items-center'>
        <div className=' shadow rounded-3' style={{maxWidth:"28rem",paddingLeft:"2rem",paddingRight:"2rem",paddingBottom:"1.2rem",backgroundColor:"white"}}>
            <form onSubmit={handleSubmit}>
            <div className='d-flex justify-content-center  mt-3'>
                <div className='rounded-circle shadow-sm d-flex justify-content-center align-items-center' style={{width:"6.5rem",overflow:"hidden",height:"6rem"}}>
                    <label className=" form-label m-0 ms-0 g mt-3 fw-bold"><img src={loginsignupimage} height={100}/></label>
                </div>
              </div>

              <div className='text-center mt-2 text-danger'>{warning}</div>
              
              <label htmlFor="email" className="form-label m-0 g mt-3 fw-bold">Email</label>
              <input type="email" style={{height:"2.3rem"}} className=" w-100 bg-light rounded-1" name="email" id="email" placeholder=""  onChange={handledata}  value={data.email}/>

              <label htmlFor="pwd" className="form-label m-0 g mt-3 fw-bold">Password</label>
              <div className='d-flex'>
                <input type={Spwd ? "text":"password"} style={{height:"2.3rem"}} className=" bg-light rounded-1 w-100" name="pwd" id="pwd" placeholder=""  onChange={handledata}  value={data.pwd}/><span className=' position-relative' style={{right:40,width:0,cursor:"pointer"}} onClick={HandleSpwd}><span className="d-flex"  style={{width:31}}>{Spwd ?<BiShow size={30}/>:<BiHide size={30}/>}</span></span>
              </div>

              <div className='d-flex justify-content-center'>
                <button type='submit' className='btn px-5 mt-4 btn-danger rounded-pill'>Login</button>
              </div>
              <p className='text-center mt-4'>Don't have an Account ? <Link to={"/signup"}>Signup</Link></p>
            </form>
        </div>
    </div>
  )
}
export default Login