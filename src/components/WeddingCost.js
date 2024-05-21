import React, { Component } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import styles from'./WeddingCost.module.css';




export default class About extends Component {
    render() {
        return (<div className="bg-dark text-white">
        
<Container> <h2 arial-level="4" >WEDDING COST AND ACCOMODATION <hr /></h2>
  <Row className="justify-content-md-center">
    <Col>
    
    <h2 arial-level="4" >PLAN YOUR WEDING IN YOUR BUDGET</h2> 
    </Col>
   
    
  </Row>
  <Row sm="1" xs="1" md= "2">
    <Col sm={12} lg={5}><Carousel className= {styles.Carousel}>
  <Carousel.Item interval={400} >
    <img 
      className="d-block w-100"
      src="./images/decor1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item interval={400}>
    <img
      className="d-block w-100"
      src="./images/decor2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/decor3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={400}>
    <img
      className="d-block w-100"
      src="./images/ladiesyello.jpg"
      alt="Fourth slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></Col>
   
    <Col sm={12} ><ul className={styles.listunstyled}>
   
<li >Triyuginarayan Temple is a preferred wedding destination in Uttarakhand because of scenic beauty. Triyuginarayan is the
 venue of the celestial marriage of Shiva and Parvati. Lord Vishnu witnessed the wedding as Parvati’s brother.Couples get married
  here to take the blessings of Lord Vishnu.</li>
 <li><b>Wedding Cost at Triyuginarayan - </b>
The wedding cost in Triyuginarayan can be adjusted according to the budget and the requirement of the couple. 
The expences of wedding in Triyuginarayan are much less than the weddings at a hotel or lodge.</li>

<li>If the couple wish the wedding to be performed in their own tradition, then the wedding is performed in their own tradition followed by the local rituals.</li>
</ul>
</Col>
  </Row>
  <Row className="justify-content-md-center">
    <Col>
    <h2 arial-level="2" >Accomodation during wedding</h2>  <hr />
    </Col>
   
    
  </Row>
  <Row sm="1" xs="1" md= "2">
    <Col sm={12} lg={5}><Carousel className= {styles.Carousel}>
  <Carousel.Item interval={400} >
    <img 
      className="d-block w-100"
      src="./images/gmvn3.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={400}>
    <img
      className="d-block w-100"
      src="./images/GMVN1.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/gmvn2.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={400}>
    <img
      className="d-block w-100"
      src="./images/gmvn4.jpg"
      alt="Fourth slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Col>
   
    <Col sm={12} ><ul className={styles.listunstyled}>
   
<li><b>Accomodation at Triyuginarayan -</b>
GMVN Triyuginarayan Cottage with 16 rooms is available for the luxury stay during wedding.
Contact No.-070603 26489
WhatsApp No.- +91 70603 26489
Email-id - triyugiweddings@gmail.com </li> 

<li>The couple takes seven vows of commitment to the marriage (phere) around the akhand dhuni.</li>
<li>Beside planning, styling and catering services we also provide additional services like transportation, wedding photography, bridal makeup and bridal dresses on rent, according to the requirement.</li></ul>
</Col>
  </Row>
</Container>




        
        
        
        

 
</div>
 
        )
    }
}
