import React from 'react';

//IMPORT BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//IMPORT COMPONENT
import Header from './component/Header';

//IMPORT TOASTER
import {Toaster} from 'react-hot-toast'

//IMPORT STYLING
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Toaster/>
      <div>
        <Header/> 
        <main className='d-flex bg-light'  style={{height:"100%",paddingTop:"65px",minHeight:"calc(100vh)"}}> 
          <Outlet/>
        </main>
      </div>
    </>
  );
}

export default App;
