import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div style={{height:"80vh"}} className='d-flex w-100 align-items-center justify-content-center'>
        <div>
            <div className=' fs-2 fw-bold'>You are on a 404 page</div>
            <div  className='d-flex w-100 h-100 align-items-center justify-content-center'><Link to={"/"} className='btn btn-primary'>Return Home</Link></div>
        </div>
    </div>
  )
}

export default Page404