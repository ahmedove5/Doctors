import React from 'react'
import img1 from "./Img/img1.png"
import img2 from "./Img/img2.png"
import img3 from "./Img/img3.png"
import img4 from "./Img/img4.png"
import { Row } from 'react-bootstrap'
import Services from './Services'

export default function content() {
  return (
    <div>
      <div>
      <div className='overlay'>
      <h1 id='h1'>
        Finding a doctor you can build long relationship with is good for your health </h1>
      <img id='img1' src={img1} /> 
      

      <h1> 3 easy step to get your sloution</h1>

     
         <div className="container1 ">
      <div className="row">
        <div className="col-sm-4">
          <img src={img2} height="70px" alt="placeholder" />
          <h3> Search a Doctor</h3>
        </div>
        <div className="col-sm-4">
          <img src={img3} height="70px"  alt="placeholder" />
          <h3>Check doctor profile</h3>
        </div>
        <div className="col-sm-4 " >
          <img src={img4} height="70px"  alt="placeholder" />
          <h3>Get your sloution</h3>
        </div>
      </div>
    </div>
      </div>
      
      </div>
  
      <div>
       
      <Services/>
      </div>
    

     


          
       
    </div>
  )
}
