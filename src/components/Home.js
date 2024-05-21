import React, { Component } from 'react';
import './Home.css' ;
import ReactWhatsapp from 'react-whatsapp';
import WeddingCost from './WeddingCost';
// import {  Card, Button  } from 'react-bootstrap';
import { Col, Container, Row} from 'react-bootstrap';
import { ListGroup  } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import Videos from './Videos';
import dhuni from "./images/dhuni.mp4";
import ContactForm from './ContactForm';
// import triyugi12 from './images/triyugi12.jpg';


import styles from'./WeddingCost.module.css';



export default class About extends Component {
    render() {
        return (<>
       



       <div className="wrapper">
       <video autoPlay loop muted 
    style ={{
      position: 'absolute',
      width: "100%",
     transition: "ease-in",
      height:"100%",
  objectFit:"cover",
     zIndex:"-1"
    }}>
<source src={dhuni} type = "video/mp4"/>
     </video>
  <article > 
   
  <h1 className="display-4"  style ={{
    // padding:  '4% 2%',
    color:'#fff',
    fontFamily: 'serif',
    fontSize:'1.8rem',
    fontStretch:'8%',
    fontWeight:'600',
    backgroundColor:'#242525'
  //     padding: 4% 2%;
  // transition:  opacity 0.5s;
  // color: #fff;
  // font-family: Georgia, 'Times New Roman', Times, serif;
  // font-size: 1.8rem;
  // font-style: normal;
  // font-weight: 600;
  // font-stretch: 10%;
  // font-display: swap;
    }}>TRIYUGINARAYAN VEDIC VIVAH PLANNER <hr className="my-4"/> </h1>
    <p>Plan your wedding in the lap of Himalaya.</p>
  </article> 
   
</div>







{/* <div style={{background: 'transparent',
color:'white',
textAlign:'center',
paddingBlock:'2rem'

}}
>
<Row>
<h1 className="display-4"  style ={{
    padding:  '2.5rem',
    color:'#fff',
    fontFamily: 'Georgia',
    fontSize:'1.8rem',
  //     padding: 4% 2%;
  // transition:  opacity 0.5s;
  // color: #fff;
  // font-family: Georgia, 'Times New Roman', Times, serif;
  // font-size: 1.8rem;
  // font-style: normal;
  // font-weight: 600;
  // font-stretch: 10%;
  // font-display: swap;
    }} >Find your Special Someone</h1>
    <Col > 
       <ReactWhatsapp number="+91 70603 26489" message="Hi I am planning for destination wedding in Triyuginarayan. Can you guide me in booking the services!!!">
               <Card.Img src='./images/whatsapplogo.png' alt="Card image" 
               height={78}
               width={78}
  /> </ReactWhatsapp>
 
    </Col>
    <Col>  
 
              <a href="tel:+917060326489">
              <Card.Img src='./images/phoneicon.jpg' alt="Card image" 
                  height={78}
               width={78}
       
  /> </a>
  
 
  </Col>
 
  
              <Col xs lg="2">  <Card className="bg-dark text-white"
              style={{width :'3.0rem', height:'3.0rem'}}>
              <a href="mailto:triyugiweddings@gmail.com?body=Hi I am planning for destination wedding in Triyuginarayan. Can you guide me in booking the services!!!">
              
             <Card.Img src='./images/gmaillogo.png' alt='here is'
                 height={78}
               width={78}
       
            
             />  </a>  </Card> 
              </Col>
    
    </Row>
    </div>
    */}
  
    
   
   





























































<div className="wrapper"
>

    {/* main content */}
     <article className="main"><div id = "maindiv"> <img src='./images/triyugi12.jpg' className='img-fluid ' alt='here is'style={{width:'100%', height:'40' }} /> </div>
 
   {/* <h1 className="display-4">TRIYUGINARAYAN VEDIC VIVAH PLANNER <hr className="my-4"/> <br/>   </h1> */}
   {/* <p >Plan your wedding in the lap of Himalaya.<br/><br/><br/></p> <p>We make sure your special day goes off without a hitch! <hr/><br/><br/>Plan your wedding in the lap of Himalaya.<br/></p>
    <Button a href="https://www.youtube.com/embed/y4JlzApr_zs" className="btn btn-primary btn-md" >Watch Video</Button>   <Button a href="https://www.facebook.com/Triyuginarayanvedicvivah/" className="btn btn-primary btn-md" >Connect to our facebook page</Button> */}
   {/* left side */}
   </article> 
   
   <aside className="aside aside-1" bg="success"> 
        
   <p> PLAN YOUR WEDDING IN YOUR BUDGET !<hr/>We know that you want your wedding to be a unique day that celebrates you! 
 </p>       <img src='./images/triuyugi14.jpg' className='img-fluid shadow-4' alt='here is' />
       <p> Tell us more about the story of your relationship that you want to share with your guests.
         We'll get back to you soon with some ideas!</p></aside> 

          {/*right  */}
  <aside className="aside aside-2"> <h5>CONTACT US </h5> <p>Better yet, see us in person! </p> <hr className="my-4"/><p> We love our customers, so feel free to visit during 
  normal business hours.<br/>
  <ReactWhatsapp number="+91 70603 26489" message="Hi I am planning for destination wedding in Triyuginarayan. Can you guide me in booking the services!!!"><img src='./images/whatsapplogo.png' className='img-fluid shadow-4 wtsapp' alt='here is' /> message us on whatsapp</ReactWhatsapp>  <hr className="my-4"/>
         <br/>
        
      <b>Triyuginarayan Vedic Vivah Planner</b><br/>Triyuginarayan Temple, Trijuginarayan, Uttarakhand, India <br/><a href="tel:+917060326489">+91 70603 26489</a><br/>
      <a href="mailto:triyugiweddings@gmail.com?body=Hi I am planning for destination wedding in Triyuginarayan. Can you guide me in booking the services!!!">E-Mail to @triyugi-weddings</a> 
          <br/> <b>Hours </b>
        <Dropdown>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
  Mon 09:00 am – 05:00 pm
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <ListGroup>
  <ListGroup.Item>Tue 09:00 am – 05:00 pm</ListGroup.Item>
  <ListGroup.Item>Wed 09:00 am – 05:00 pm</ListGroup.Item>
  <ListGroup.Item>Thur 09:00 am – 05:00 pm</ListGroup.Item>
  <ListGroup.Item>Fri 09:00 am – 05:00 pm</ListGroup.Item>
  <ListGroup.Item>Sat 09:00 am – 05:00 pm</ListGroup.Item>
</ListGroup>
  </Dropdown.Menu>
</Dropdown>
         </p>
  

</aside>


  
</div>

    {/* <Carousel 
      className="carousel-wrapper"
      dynamicHeight
      showThumbs={false}
      interval={1000}
      infiniteLoop
    >
     <Carousel.Item  className="image-container"
      style={{
         backgroundSize : "400px"
        }}
    >
     <Carousel.Caption>
      <h3 >About Us</h3> <hr />
      <p>Triyuginarayan Vedic Vivah Planner offers 'Vedic wedding' (traditional Indian Hindu wedding) planning, styling and catering services in Triyuginarayan.  </p>
    </Carousel.Caption>
    </Carousel.Item>

 
    <Carousel.Item className="image-container"
        style={{
         backgroundSize : "400px"
        }}
    >
     <Carousel.Caption>
      <h3>Weddings Simplified</h3> <hr />
      <p>We are here to make your special day memorable. We make available all the required services beside lodging.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="image-container"
        style={{
         backgroundSize : "400px"
        }}
    >
    <Carousel.Caption>
      <h3>Designing for Memories</h3> <hr />
      <p>We are here to make your special day memorable. Connect with us to to organize your wedding in your budget. We make available all the required services beside lodging.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="image-container"
        style={{
         backgroundSize : "400px"
        }}
    >
     <Carousel.Caption>
      <h3>Wedding In Your Budget.</h3> <hr />
      <p>Our main motto is to offer the wedding services in your budget. The expences of wedding in Triyuginarayan are much less than the weddings at a hotel or lodge.</p>
    </Carousel.Caption>
    </Carousel.Item>
      </Carousel> */}
      <br/>
     
      
     
<WeddingCost/>

<Videos/>



<div className="bg-dark text-white">
        
<Container>
  <Row className="justify-content-md-center">
  
    <h3 arial-level="2">  <hr /></h3>
    <h4 arial-level="2" >Frequently Asked Questions</h4>  <hr />
  
   
 
  </Row>
  <Row sm="1" xs="1" md= "2">
    <Col sm={12} lg={6}><ul className={styles.listunstyled}>
   
  <li> <h5 style = {{color:'rgb(9, 219, 209)'}} >How can I book the Marriage Package? </h5> 
 You can WhatsApp us on   <ReactWhatsapp number="+91 70603 26489" message="Hi I am planning for destination wedding in Triyuginarayan. Can you guide me in booking the services!!!"> +91 70603 26489</ReactWhatsapp> with 
 marriage date and No. of guests planning for the wedding or call us on <a href="tel:+917060326489">+91 70603 26489</a>.</li>  <br/>
 <li><h5 style = {{color:'rgb(9, 219, 209)'}} >Is there any accomodtion near the temple? </h5>
Yes, there is Triyuginarayan Cottage available for the luxury stay during wedding.</li>

       
          </ul></Col>
   
    <Col sm={12} ><ul className={styles.listunstyled}>
   
   
 <li> <h5 style = {{color:'rgb(9, 219, 209)'}} >How much does it cost to marry in Triyuginarayan?</h5>
 The expences of wedding in Triyuginarayan are much less than the weddings at a hotel or lodge. Its 
 only cost 20% to 30% of what you pay for the weddings at a hotel or lodge </li>

 
    <li ><h5 style = {{color:'rgb(9, 219, 209)'}} >Do you also provide catering services during wedding.</h5> 
   Yes, we also provide catering services during wedding.</li>
        
</ul>
</Col>
  </Row>
  <Row className="justify-content-md-center">
   
    
  </Row>
  <Row sm="1" xs="1" md= "2">
    <Col sm={12} lg={6}>
    <ul className={styles.listunstyled}>
   
   <li >  <h5 style = {{color:'rgb(9, 219, 209)'}} >How can I reach to the Triyuginarayan Temple?</h5> 
Jolly Grant Airport, Dehradun is the nearest airport
 to Triyuginarayan, after that you can travel by road.
 Taxi/Cab are available to reach here from Dehradun Airport.
Nearest railway station to reach Sonprayag is at Dehradun or 
  Rishikesh railway station. </li></ul>
</Col>
   
    <Col sm={12} > <ul className={styles.listunstyled}>
  
    <li ><h5 style = {{color:'rgb(9, 219, 209)'}} >What are the other services you provide during wedding?</h5> 
    Beside planning, styling and catering services we also provide additional services like transportation, wedding
     photography, bridal makeup and bridal dresses on rent, according to the requirement.</li>
    </ul>    
</Col>

  </Row>
 
</Container>

<ContactForm/>

</div>
 </>
        )
    }
}
