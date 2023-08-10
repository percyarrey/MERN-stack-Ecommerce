import React from 'react'

//GIF
import loginsignupimage from '../assets/login-animation.gif'

//REACT ICONS
import {BiHide,BiShow} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { TailSpin } from 'react-loader-spinner'

//REDUX
import {useDispatch, useSelector} from 'react-redux'
import { loginRedux } from '../redux/userSlice'

function Login() {  
  //USING REDUX
    const userData = useSelector(state=>state.user)
    const dispatch = useDispatch()
    /* NAVIGATION */
    const navigate = useNavigate()
    //REACT HOOK DECLARATION
    const [singupSpinner,setSignupSpinner]=React.useState(false)

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

    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(!singupSpinner){
          const {email,pwd}=data
          if(email&&pwd){
            setSignupSpinner(true)
                setWarning("")
                const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/login`,{
                  method: "POST",
                  headers:{
                    "content-type" : "application/json"
                  },
                  body: JSON.stringify(data)
                }).then((res)=>{
                  setSignupSpinner(false)
                  return res.json()
                })
                  .catch((e)=>{
                    setSignupSpinner(false)
                    return e
                  })
                
                const dataRes = await fetchData
                if(dataRes.message=="Wrong Email and Password"){
                  setWarning("Wrong Email and Password")
                  toast("Wrong Email and Password")
                }else{
                  if(dataRes.message=="Welcome"){
                    dispatch(loginRedux(dataRes.resData))
                    toast("Welcome " + dataRes.resData.fname)
                    setTimeout(() => {
                      navigate("/",{replace:true})
                    }, 500);
                  }else{
                    setWarning(dataRes.message)
                    toast(dataRes.message)
                  }   
                }
          }else{
            setWarning("Please enter required fields")
            toast("Please enter required fields")
          }
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
                <button type='submit' className='btn px-5 mt-4 btn-danger rounded-pill' style={{width:150,height:38}}>{singupSpinner?<TailSpin color='white' width={50} height={28}/>:"Login"}</button>
              </div>
              <p className='text-center mt-4'>Don't have an Account ? <Link to={"/signup"}>Signup</Link></p>
            </form>
        </div>
    </div>
  )
}
export default Login