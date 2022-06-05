import React from 'react'

const Home3 = () => {
  return (
    <div  className='homeContainer'> 
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
      
      
      <div className='homeInfoContainer'>
        <h1 className='planHome'>You can order our Ingredients</h1>

        <div style={{marginTop: '25px'}}>
          <h1> Why order from us?? </h1>
          <li style={{fontSize: '22px', marginTop: '5px', fontWeight: '500'}}> We provide the most Organic and the Freshest Ingredients </li>
          <li style={{fontSize: '22px', marginTop: '5px', fontWeight: '500'}}> We provide high quality yet affordable ingredients </li>
          <li style={{fontSize: '22px', marginTop: '5px', fontWeight: '500'}}> We provide Lightning speed delivery </li>
          <li style={{fontSize: '22px', marginTop: '5px', fontWeight: '500'}}> We provide free detailed recipes </li>
          <li style={{fontSize: '22px', marginTop: '5px', fontWeight: '500'}}> Convenient </li>

        </div>
      </div>

      <div  className='homeInfoContainer2'>
          <h1 className='planHome'>Get Your Membership Today !!</h1>
          <h2 style={{marginTop: '10px', fontWeight: '500'}}> To get Free Delivery off all Ingredients orders  </h2>


          <h1 style={{marginTop: '30px'}}> Limited Time Offer </h1>
          <div className='membershipInfo'> At only 
            <span style={{textDecoration: 'line-through', fontSize: '16px', color: 'red', marginLeft: '5px'}} >RM20</span> 
            <span style={{ color: 'blue', textDecoration: 'underline' }}> RM12 </span>/month
          </div>

          <button className='getMembership'>Get It now</button>
      </div>

    </div>
  </div>
  )
}

export default Home3