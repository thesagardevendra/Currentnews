import React from 'react';
import "./Header.scss";
import{Link} from "react-router-dom";

function Header() {
    return (
        <div className="Header">
               <Link style={{textDecoration:"none",color:"inherit"}} to="/"><h1>Current News</h1></Link>
        
                <ul>
               <Link className="Link" to="/entertainment" > <li>Entertainment</li></Link>
               <Link  className="Link" to="/technology" > <li>Technology</li></Link>
               <Link  className="Link" to="/bussiness" > <li>Business</li></Link>

               <Link   className="Link"to="/general" > <li>General</li></Link>
               <Link  className="Link" to="/science" > <li>Science</li></Link>
               <Link  className="Link" to="/sports" > <li>Sports</li></Link>
                </ul>
            </div>
    )
}

export default Header
