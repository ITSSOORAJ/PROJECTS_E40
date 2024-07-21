import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './routes/root';
import ErrorPage from './error-page';
import Home,{loader as homeloader}from './routes/home';
import Book,{loader as bookloader} from './routes/books';
import Authors,{loader as authorloader} from './routes/authors';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element:< Home />,
        loader :homeloader

      },
      {
        path:"/books/:bookId",
        element:< Book/>,
        loader : bookloader
      },
      {
        path:"/authors/:authorId",
        element : < Authors/>,
        loader : authorloader
      }

    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
