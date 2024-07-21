import React from "react";
import { Link } from "react-router-dom";
function Header(pros)
{
    return(        
        <header className="container    mx-auto flex flex-row
          shadow-2xl justify-between items-center ">
               <h1 class= "font-bold text-2xl bg-clip-text text-transparent  bg-gradient-to-r from-pink-500 to-violet-500 ">
                   LIBTOX
               </h1>
               <nav >
                   <ul className=" flex flex-row gap-6 bg-clip-text text-transparent  bg-gradient-to-r from-pink-500 to-violet-500 ">
        
                       <li>
                           <a href ="#"> <Link to={'/'}> Home </Link> </a>
                       
                       </li>
                       <li>
                           <a href ="#">About</a>
                       
                       </li>
                       <li>
                           <a href ="#">NewsLetter</a>
                       
                       </li>
                       <li>
                           <a href ="#">Contact</a>
                       
                       </li>
                       </ul>
                       </nav>
        </header>
        );

}
export default Header;
