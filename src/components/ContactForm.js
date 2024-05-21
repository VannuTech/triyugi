import React, { Component } from 'react';
import { Card, Container, Row, Col} from 'react-bootstrap';
import ReactWhatsapp from 'react-whatsapp';




export default class About extends Component {
  
    render() {
        return (
            <Container style={ {background: 'transparent'}} >
            <Row className="justify-content-md-center">
              <Col xs lg="2"> 
              <Card className="bg-dark text-white" style={{width :'3.0rem', height:'3.0rem'}}
  >
              <ReactWhatsapp number="+91 70603 26489" message="Hi I am planning for destination wedding in Triyuginarayan. Can you guide me in booking the services!!!">
               <Card.Img src='./images/whatsapplogo.png' alt="Card image" 
               height={38}
               width={50}
  
      
  /> </ReactWhatsapp>
 </Card>
 </Col>
 <Col Col xs lg="2"> <Card className="bg-dark text-white"  
  style={{width :'3.0rem', height:'3.0rem'}}
 >
              <a href="tel:+917060326489">
              <Card.Img src='./images/phoneicon.jpg' alt="Card image" 
                 height={40}
               width={50}
       
  /> </a>
  
  </Card>
  </Col>
 
  
              <Col xs lg="2">  <Card className="bg-dark text-white"
              style={{width :'3.0rem', height:'3.0rem'}}>
              <a href="mailto:triyugiweddings@gmail.com?body=Hi I am planning for destination wedding in Triyuginarayan. Can you guide me in booking the services!!!">
              
             <Card.Img src='./images/gmaillogo.png' alt='here is'
                height={40}
               width={50}
            
             />  </a>  </Card> 
              </Col>
            </Row>
     
 

</Container>


        )
    }
}
