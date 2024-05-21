import React, { Component } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import Iframe from 'react-iframe';




export default class About extends Component {
  
    render() {
        return (<div className="bg-dark text-white">
        
<Container>
  <Row className="justify-content-md-center">
    <Col>
    <h3 arial-level="2">  <hr /></h3>
    <h4 arial-level="2" >Watch the glimpses of wedding in Triyuginarayan.</h4> 
    </Col>
   
    
  </Row>
  <Row sm="1" xs="1" md= "2">
    <Col sm={12} lg={6}><Iframe src="https://www.youtube.com/embed/oEERmip6EPo" title="YouTube video player" frameborder="0" 
       
       width="100%" 
       height="300"
       id="myId"
       className="myClassname"
       display="initial"
       position="relative"
       styles={{height: "25px", width:"100%", border : ".2px solid black"}}
       margin = "20px"
       allow="autoplay"
       /></Col>
   
    <Col sm={12} lg={6} >
    <Iframe  url="https://www.youtube.com/embed/qAqpSheC2fU"
 width="100%" 
       height="300"
       id="myId"
       className="myClassname"
       display="initial"
       position="relative"
       styles={{height: "25px", width:"100%", border : ".2px solid black"}}
       margin = "20px"
       allow="autoplay"
       controls autoplay
       />

        

</Col>
  </Row>
 
 
</Container>





        
        
        
        

 
</div>
 
        )
    }
}
