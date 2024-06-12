"use client"
import React from 'react'
import {Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa'
import top from '../constants/Image/logo.png'
import Image from 'next/image';
import { BiSolidStar } from 'react-icons/bi'
import hills from '../constants/Image/hills.png'
import Button from 'react-bootstrap/Button'



export const Header = () => {
  return (
     <section className='bg'>

<div>

<Col className='d-flex justify-content-center'>
  <Image src={top} alt='' width={40} height={30} className='imagetop'/><p className='name'> <b>HIKE MORE</b></p>  
  </Col>
  </div>

  
    <Navbar expand="lg" className="bg-body-tertiary"id='header'>
    <br/><br/>

    <Container>
      
  
        <Nav className="me-auto">
          <div className='nav'>
          <Link href='./' className='navlink'> Home </Link>
          <Link href='' className='navlink'> About </Link>
          <Link href='' className='navlink'> Package </Link>
          <Link href='' className='navlink'> Gallery </Link>
          <Link href='' className='navlink'> Contacts </Link>
          </div>
        </Nav>

        <div >
        <form className='searchbar'>
        <button type='submit'className='but' ><FaSearch /></button>
       <input type='text' typeof='sumbit' placeholder='search' name='text'className='input'/>
      
       </form>
       </div>
    </Container>
  </Navbar>

     <Container>
         <Row>
 
     <Col >
 <div className='cards'>
     <div className='cardsinner'>
 <div className='star'>
 <BiSolidStar /> <BiSolidStar /> <BiSolidStar />   <BiSolidStar /> <BiSolidStar /> <BiSolidStar />
 </div>
 
 <br/>
 <p className='taxt'> "Lorem ipsum, dolor sit amet consectetur 
 adipisicing elit. Animi, iure. Hic obcaecati sint, voluptatum 
 dolor reiciendis fuga doloribus neque dolorum odio. 
     </p>
 
     <p className='taxt'> - Quote - </p>
 
        
     </div>
 </div>
     </Col>
 
     <Col  className='plus'>
 <Image src={hills} alt='' width={320} height={150} style={{marginLeft: '20px'}}/>
 <h1 className='hike'> HIKE MORE </h1>
 <h1 className='hik'> -Worry Less- <br/>
 <p className='tat' style={{textAlign: 'center'}}> "Lorem ipsum, dolor sit amet consectetur <br/>
 adipisicing elit. Animi, iure. Hic obcaecati sint,<br/> voluptatum 
 dolor. </p></h1>
 
 
 <Button variant='light' style={{marginLeft: '110px', borderRadius: '10px', }}> Learn more </Button>    
 
 </Col>
 
 
 
 
 
         </Row>
     </Container>
       
 <br/>
    </section>
   
 
  )
};