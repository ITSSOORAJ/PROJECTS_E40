import React from "react";

function Header(pros)
{
    return(        
         <header className="container    mx-auto flex flex-row
           shadow-2xl justify-between items-center ">
                <h1 class= "font-bold text-2xl text-cyan-300 ">
                    SHOWTAN
                </h1>
                <nav >
                    <ul className=" flex flex-row gap-6 text-cyan-500">
                        <li>
                            <a href ="#">Home</a>
                        
                        </li>
                        <li>
                            <a href ="#">About</a>
                        
                        </li>
                        <li>
                            <a href ="#">Movies</a>
                        
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
