"use client"
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


const Cards = () => {
  return (
    <section className='man'>
    <Container>

      <br/><br/>

    <h1 style={{textAlign: 'center', marginTop: '70px', }}> <b> Choose Your Level </b></h1>

    <br/><br/>

        <Row className='justfity-content-center' style={{marginLeft: '40px'}}>


            <Col >
            <h1 style={{marginLeft: '60px'}}> Beginner <br/> </h1>
            <hr style={{width: '350px', marginLeft: '-20px'}}/>
            
            <p> Lorem ipsum dolor sit amet consectetur<br/>
                 adipisicing elit. Rem officiis odio<br/>
                  maiores pariatur consequuntur, <br/>
                  commodi ipsam at sequi quas eum ex, <br/>
                  nemo deserunt! Deserunt dolorum quasi<br/>
                   tenetur nam veniam assumenda!</p>
            
            
            
            </Col>
        
        
        
            <Col >
            <h1 style={{marginLeft: '60px'}}> Experienced <br/> </h1>
            <hr style={{width: '350px', marginLeft: '-20px'}}/>
            
            <p> Lorem ipsum dolor sit amet consectetur<br/>
                 adipisicing elit. Rem officiis odio<br/>
                  maiores pariatur consequuntur, <br/>
                  commodi ipsam at sequi quas eum ex, <br/>
                  nemo deserunt! Deserunt dolorum quasi<br/>
                   tenetur nam veniam assumenda!</p>
            
            
            
            </Col>
        

        
            <Col >
            <h1 style={{marginLeft: '60px'}}> Expert <br/> </h1>
            <hr style={{width: '350px', marginLeft: '-20px'}}/>
            
            <p> Lorem ipsum dolor sit amet consectetur<br/>
                 adipisicing elit. Rem officiis odio<br/>
                  maiores pariatur consequuntur, <br/>
                  commodi ipsam at sequi quas eum ex, <br/>
                  nemo deserunt! Deserunt dolorum quasi<br/>
                   tenetur nam veniam assumenda!</p>
            
            
            
            </Col>
        
        
        
        
        
        
        
        
        
        </Row>
    </Container>
    </section>
  )
}

export default Cards;