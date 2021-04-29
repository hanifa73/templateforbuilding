import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Video from "../components/Video"



export default () => {
  return (
    
   
 
      
 

<Layout> 



     <Video/>   
 
 
 
      <Hero>
            
        <Services/>  
          
          <Jobs/>
          <Blogs/>
         </Hero> 
          
    
   
           
      </Layout>

  )
}
// ...GatsbyImageSharpFluid
