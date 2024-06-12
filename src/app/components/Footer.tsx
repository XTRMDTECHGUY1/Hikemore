"use client"
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import top from '../constants/Image/logo.png'
import  Image from 'next/image'
import { AiFillInstagram,  AiFillFacebook, AiFillYoutube, AiFillTwitterSquare} from 'react-icons/ai'
import line from '../constants/Image/LINE.png'

const Footer = () => {
  return (

    <section className='footer'>
    <Container>

        <Row>

        <Col className='d-flex justify-content-center'>
      <Image src={top} alt='' width={40} height={30} className='imagetop'/><p className='name'> <b>HIKE MORE</b></p>  
      </Col>
     
     
       </Row>


<Row>


  <Col>       
  <br/><br/>
<p style={{color: 'white', fontSize: '16px'}}> Lorem ipsum dolor sit amet consectetur<br/>
   adipisicing elit. Porro reprehenderit <br/>
   nostrum nam earum exercitationem unde <br/>
   odio sint velit dignissimos modi animi <br/>
   sequi consequuntur maiores quos mollitia <br/>
   recusandae adipisci, vitae asperiores.</p>
   </Col>


  <Col>       
  <br/><br/>
<Image src={line} alt='' width={1} height={300} />  </Col>


   <Col>       
  <br/><br/>
<p style={{color: 'white', fontSize: '16px', }}> find us here</p> 




  <Col className='justify-content-center'>

  <AiFillInstagram style={{fontSize: '30px', color: 'White'}}/> @ hike_more
  
  </Col>

  <Col>

<AiFillTwitterSquare style={{fontSize: '30px',color: 'White'}}/> @ hike_more

</Col>

<Col>

<AiFillYoutube style={{fontSize: '30px',color: 'White'}}/> @ hike_more

</Col>
<Col>

<AiFillFacebook style={{fontSize: '30px', color: 'White'}}/> @ hike_more

</Col>


</Col>










   </Row>
    </Container>
    </section>
  )
}

export default Footer;
