import React from 'react';

//IMPORT COMPONENT
import Header from './component/Header';
import Footer from './component/Footer';

//IMPORT TOASTER
import {Toaster} from 'react-hot-toast'

//IMPORT STYLING
import './App.css';
import { Outlet } from 'react-router-dom';

//IMPORT BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

function App() {
  
  return (
    <>
      <div className="bg-light" style={{maxWidth:"100vw",overflow:"hidden"}}>
      <Toaster/>
      <div>
          <Header/> 
          <main className='d-flex container-fluid container-lg'  style={{paddingTop:"65px",minHeight:"calc(99vh - 65px)"}}> 
            <Outlet/>
          </main>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App;
