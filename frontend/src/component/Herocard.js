import React from 'react'
//REACT ROUTING
import {useNavigate} from 'react-router-dom'

function Herocard(props) {
  const navigate = useNavigate()
  function handleClick() {
    navigate("/menu/"+props.id)
  }
  return (
    <div className='col-6 col-sm-3 col-lg-4'>
        <div className="card h-100 shadow-sm" onClick={handleClick} style={{maxWidth:"15rem",maxHeight:"16rem",backgroundColor:"white",cursor:"pointer"}}>
            <div className='overflow-hidden d-flex align-items-center justify-content-center'  style={{height:'10rem'}}>
                <img className="card-img-top" src={props.image}  alt="Title"/>
            </div>
            <div className=" card-body d-flex align-items-center">
                <div className=' text-center w-100'>
                <h4 className="card-title fs-5">{props.productname}</h4>
                <p className="card-text"><span className=' fw-bolder'>{props.price}</span>frs</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herocard