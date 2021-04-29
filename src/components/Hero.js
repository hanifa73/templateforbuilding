import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import Services from "./Services"
import services from "../constants/services"




// ...GatsbyImageSharpFluid

  const Hero = ({ children }) => {
    return (
      <>
 
  <div className="wrap">
        {children}
        
        </div>
      </>
    )
 }

export default Hero
