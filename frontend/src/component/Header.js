import React from 'react'
import logo from "../assets/logo.png"
import { Link, useLocation} from 'react-router-dom'

//REACT ICONS 
import {HiOutlineUser} from 'react-icons/hi'
import {BsCartFill} from 'react-icons/bs'

export default function Header(){
  const loc=useLocation()
  const pathname = loc.pathname
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top shadow-sm">
            <div className="container-md">
            <Link className="navbar-brand" to={"/"}><img src={logo} height={30}/></Link>
            <div className='ms-auto me-3 d-flex d-sm-none align-items-center gap-2'>
                    <button type="button" className="btn p-0 gap-0 g-0">
                      <BsCartFill size={27}/>
                      <div className=' position-absolute d-flex align-items-center justify-content-center text-white rounded-circle bg-danger' style={{top:10,marginLeft:9,padding:1,height:22,width:19}}>0</div>
                    </button>
                    <div className="dropdown">
                      <button className="btn p-1" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                            <HiOutlineUser  className='p-0 m-0 rounded-circle border border-2 border-black border-dark' size={27}/>
                          </button>
                      <div className="dropdown-menu dropdown-menu-end p-0" aria-labelledby="triggerId">
                        <Link className="dropdown-item" to={'addproduct'}>New Product</Link>
                        <Link className="dropdown-item" to={'login'}>Login</Link>
                      </div>
                    </div>
            </div>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                  <Link className={pathname=="/" ? "nav-link active fw-bold": "nav-link"} to={''}>Home</Link>
                  <Link className={pathname=="/menu" ? "nav-link active fw-bold": "nav-link"} to={'menu'}>Menu</Link>
                  <Link className={pathname=="/about" ? "nav-link active fw-bold": "nav-link"} to={'about'}>About</Link>
                  <Link className={pathname=="/contact" ? "nav-link active fw-bold": "nav-link"} to={'contact'}>Contact</Link>
                  <div className='d-none d-sm-flex align-items-center gap-2'>
                    <button type="button" className="btn p-0 gap-0 g-0">
                      <BsCartFill size={29}/>
                      <div className=' position-absolute d-flex align-items-center justify-content-center text-white rounded-circle bg-danger' style={{top:17.5,marginLeft:10,padding:1,height:22,width:19}}>0</div>
                    </button>
                    <div className="dropdown">
                      <button className="btn p-1" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                            <HiOutlineUser  className='p-0 m-0 rounded-circle border border-2 border-black border-dark' size={27}/>
                          </button>
                      <div className="dropdown-menu dropdown-menu-end p-0" aria-labelledby="triggerId">
                        <Link className="dropdown-item" to={'addproduct'}>New Product</Link>
                        <Link className="dropdown-item" to={'login'}>Login</Link>
                      </div>
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