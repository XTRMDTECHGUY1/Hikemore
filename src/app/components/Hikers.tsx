'use client'
import React from 'react'
import Image from 'next/image'

import shape from '../constants/Image/Shape.png'


 const Hikers = () => {


  return (
   <section className='shape'>
    <Image src={shape} alt='' className='shape'/>

    <div className='cad'>
   <div className='inner'>
    
    <h1> <b> 1000+ Route. 1 Million Hikers. <br/>
    Memorial Memories. </b> </h1>
    <br/>
    <p className='p'> Lorem ipsum dolor sit amet consectetur<br/>
       adipisicing elit. Ex aliquam tenetur rem
        velit earum quos eveniet ad.</p>
    
   
   
   </div>
     
     </div>

   </section>
   
  
  )
}

export default Hikers;