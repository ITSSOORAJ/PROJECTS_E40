//refer the getting started secction of react official page
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import ErrorPage from './error-page';
import Home,{loader as homeloader} from './routes/home';
import Movie,{loader as movieloader} from './routes/movie';
const router = createBrowserRouter([
  {
    path: "/", // "/ " indicate the starting page we will direct it to the root.jsx page which have header and footer where it have an outlet tag in between which was used for dispaly the main content
    element: <Root />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element: <Home />,
        loader: homeloader //loader is used to load the content from the database
      },
      {
        path:"/movies/:movieId",  //inorder to update or select a particular item  with the  idname the idname should be same as that given here that is if movieid was given instead of movieId it wont runs and vice versa
        element: <Movie />,
        loader : movieloader
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
