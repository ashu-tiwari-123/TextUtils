import React,{useState} from "react";
import PropTypes from "prop-types";
import DarkModeToggle from "react-dark-mode-toggle";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // const [title,setTitle]=useState("TextUtil-Home")
  // const handletitle =(e)=>{
  // //   if(document.title==="TextUtil-Home"){
  // //      document.title ="TextUtil-About"
  // //   }
  // //   else if(document.title==="TextUtil-About"){
  // //     document.title="TextUtil-Home"
  // //   }
  // // }
   
  //  document.title="Te"
  // }
  // const handleti=()=>{
    
  // }
 
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid ">
          <Link   className="navbar-brand text-light" to="/">
            {props.title}
          </Link>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link  className="nav-link text-light" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
          </div>
          <DarkModeToggle
            onChange={props.togglemode}
            checked={props.isDarkMode}
            size={50}
          />
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};
Navbar.defaultProps = {
  title: "TextUtils",
  about: "About",
}
