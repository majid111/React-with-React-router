import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';
import Products from './components/Products/Products.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element:<About></About>,
      },
      {
        path:'/contact',
        element:<Contact></Contact>,
      },
      {
        path:'/users',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>,
      },
      {
        path:'/products',
        loader: ()=>fetch('http://makeup-api.herokuapp.com/api/v1/products.json'),
        element:<Products></Products>,
      },
      {
        path:'/user/:userId',
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
