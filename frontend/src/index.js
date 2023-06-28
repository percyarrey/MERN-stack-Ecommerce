import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//REACT ROUTER DOM
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'

//IMPORT PAGES
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/login';
import Addproduct from './pages/addproduct';
import Signup from './pages/signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='menu' element={<Menu/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='addproduct' element={<Addproduct/>}/>
      <Route path='signup' element={<Signup/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
