import React, { useState } from "react"
import x from "../assets/x.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = () => {
  const [navbar, setNavbar,] = useState(false);

  const changeBackground=()=>{

   if(window.scrollY>=300){
     setNavbar(true)
   }else{
     setNavbar(false);
   }
  }
  window.addEventListener('scroll',changeBackground)
  return (

  
  <nav className={navbar ? 'navbar-active':'navbar'}>
    <div className="nav-center">
      <div className="nav-header">
        <img  width="50" height="50"src={x} alt="logo"/>
        <button  type="button" className="toggle-btn">
          <FaAlignRight></FaAlignRight>
          </button>

       </div>

    

    <PageLinks styleClass="nav-links"/>
    
    </div>
  </nav>
  
    )
}

export default Navbar
