import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home2 = () => {

  useEffect(()=>{
    Aos.init({duration: 200, offset: 150,})
  }, [])

  return (
    <div>
    <div  className="homeContainerp2">

     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%'}}>
       <img src='/recipe.png'  style={{width: '50%', objectFit: 'contain'}} data-aos="fade-down"  />

       <div data-aos="fade-up" className='homeInfoContainer'>
           <h2 className='planHome'>With Wide Variety of Recipes to chose from</h2>
           <div style={{padding: '30px'}}>
             <p style={{fontSize: '20px', marginBottom: '20px'}}>
               There are various type of meals you can choose from. 
             </p>
             <p style={{fontSize: '20px'}}>
               Whether you are a vegan or not, alergic to peanut or not, there are always a meal 
               meal recipe that are suitable for you
             </p>
             <p style={{fontSize: '20px'}}> Have no idea how to cook? No problem learn from our detailed recipes </p>
           </div>
       </div>


     </div>
   </div>
   </div> 
  )
}

export default Home2