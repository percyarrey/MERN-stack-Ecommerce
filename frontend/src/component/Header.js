import React from 'react'
import logo from "../assets/logo.png"

//REACT ROUTER
import { Link, useLocation} from 'react-router-dom'

//REACT ICONS 
import {HiOutlineUser} from 'react-icons/hi'
import {BsCartFill} from 'react-icons/bs'

//REACT REDUX
import { setDataProduct } from '../redux/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { logoutRedux } from '../redux/userSlice'

//REACT TOAST
import { toast } from 'react-hot-toast'

export default function Header(){
  //ROUNTING VARIABLE
  const loc=useLocation()
  const pathname = loc.pathname
  const menuPath = pathname.slice(0,5)
  
  //REDUX DATA
  const userData = useSelector((state)=>state.user.user)
  const cartData = useSelector((state)=>state.cart.cartList)
  //HANDLING LOGOUT
  const handlelogout = ()=>{
    dispatch(logoutRedux())
    toast("Logout succesfully")
  }
  //REACT REDUX  
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product.productList)


  //REACT HOOK DECLARATION
  React.useEffect(()=>{
    (async()=>{
      fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/`)
      .then((res)=>res.json())
      .then((res)=>{
        dispatch(setDataProduct(res))
        console.log(res)
      })
      .catch((e)=>e)
    })()
  },[])

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top shadow-sm">
            <div className="container-md">
            <Link className="navbar-brand" to={"/"}><img src={logo} height={30}/></Link>
            <div className='ms-auto me-3 d-flex d-sm-none align-items-center gap-2'>
                    <Link to="cart" className="btn p-0 gap-0 g-0">
                      <BsCartFill size={27}/>
                      <div className=' position-absolute d-flex align-items-center justify-content-center text-white rounded-circle bg-danger' style={{top:10,marginLeft:9,padding:1,height:22,width:19,fontSize:13}}>{cartData.length}</div>
                    </Link>
                    <div className="dropdown">
                      {
                        userData.email?<>
                          <button className="btn p-1" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                            {userData.profilepic?<img className=' rounded-circle' height={30} src={userData.profilepic} />:<HiOutlineUser  className='p-0 m-0 rounded-circle border border-2 border-black border-dark' size={27} color='blue'/>}
                          </button>
                          <div className="dropdown-menu dropdown-menu-end p-0" aria-labelledby="triggerId">
                            <Link className="dropdown-item" to={'addproduct'}>New Product</Link>
                            <Link className="dropdown-item" to={'editproduct'}>Edit Product</Link>
                            <span onClick={handlelogout}  className="dropdown-item">Logout</span>
                          </div>
                        </>:<Link to={'login'}>
                          <HiOutlineUser color='black' className='p-0 m-0 rounded-circle border border-2 border-black border-dark' size={27} title='LOGIN'/>
                        </Link>
                      }
                      
                    </div>
            </div>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                  <Link className={pathname=="/" ? "nav-link active fw-bold": "nav-link"} to={''}>Home</Link>
                  <Link className={menuPath=="/menu" ? "nav-link active fw-bold": "nav-link"} to={'menu/64a2eb4649f59bbcd19c33d6'}>Menu</Link>
                  <Link className={pathname=="/about" ? "nav-link active fw-bold": "nav-link"} to={'about'}>About</Link>
                  <Link className={pathname=="/contact" ? "nav-link active fw-bold": "nav-link"} to={'contact'}>Contact</Link>
                  <div className='d-none d-sm-flex align-items-center gap-2'>
                    <Link to="cart"  className="btn p-0 gap-0 g-0">
                      <BsCartFill size={29}/>
                      <div className=' position-absolute d-flex align-items-center justify-content-center text-white rounded-circle bg-danger' style={{top:17.5,marginLeft:10,padding:1,height:22,width:19,fontSize:13}}>{cartData.length}</div>
                    </Link>
                  
                    <div className="dropdown" onClick={(()=>{console.log(sessionStorage.getItem('userData'))})}>
                      {
                        userData.email?<>
                          <button className="btn p-1" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                            {userData.profilepic?<img className=' rounded-circle' height={30} src={userData.profilepic} />:<HiOutlineUser  className='p-0 m-0 rounded-circle border border-2 border-primary' size={27} color='blue'/>}
                          </button>
                          <div className="dropdown-menu  dropdown-menu-end p-0" aria-labelledby="triggerId">
                            <Link className="dropdown-item" to={'addproduct'}>New Product</Link>
                            <Link className="dropdown-item" to={'editproduct'}>Edit Product</Link>
                            <span onClick={handlelogout} className="dropdown-item" >Logout</span>
                          </div>
                        </>:<Link to={'login'}>
                          <HiOutlineUser color='black' className='p-0 m-0 rounded-circle border border-2 border-black border-dark' size={27} title='LOGIN'/>
                        </Link>
                      }
                      
                    </div>
                  </div>    
                </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}