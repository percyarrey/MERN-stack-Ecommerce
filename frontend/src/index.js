import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//REACT ROUTER DOM
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'

//IMPORT PAGES
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/login';
import Addproduct from './pages/addproduct';
import Signup from './pages/signup';
import Details from './pages/Details'
import Menu from './pages/Menu'
import Cart from './pages/Cart';
import Editproduct from './pages/Editproduct';
import Page404 from './pages/page404';
import Editproductdetails from './pages/Editproductdetail';

//IMPORT REDUX
import { Provider } from 'react-redux';
import { Store } from './redux/index';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='addproduct' element={<Addproduct/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='menu/:id' element={<Menu/>}/>
      <Route path='details/:id' element={<Details/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='editproduct' element={<Editproduct/>}/>
      <Route path='editproduct/:id' element={<Editproductdetails/>}/>
      <Route path='*' element={<Page404/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router}/> 
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
