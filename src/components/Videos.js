import React, { Component } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import styles from'./WeddingCost.module.css';
import Iframe from 'react-iframe';




export default class About extends Component {
  
    render() {
        return (<div className="bg-dark text-white">
        
<Container>
  <Row className="justify-content-md-center">
    <Col>
    <h3 arial-level="2">  <hr /></h3>
    <h4 arial-level="2" >PLAN YOUR WEDING IN YOUR BUDGET</h4> 
    </Col>
   
    
  </Row>
  <Row sm="1" xs="1" md= "2">
    <Col sm={12} lg={5}><Iframe src="https://www.youtube.com/embed/qvmYbA-8N2w" title="YouTube video player" frameborder="0" 
       
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
   
    <Col sm={12} ><ul className={styles.listunstyled}>
   
   
 <li>Ranjana & Deepak are promoting Triyuginarayan as a wedding destination since 2017.</li>
 <li> In 2019 they themself got married at this place. Till date they have organized more than twenty weddings at this place.</li>
<li>@Triyugiweddings is extremely thrilled to offer booking deals that cater to this increasingly important requirement of our customers.
<a href="mailto:triyugiweddings@gmail.com?body=My custom mail body">E-Mail to @triyugi-weddings</a></li>

        
</ul>
</Col>
  </Row>
  <Row className="justify-content-md-center">
    <Col>
    <h4 arial-level="2" > Appriciation from DM Mangesh Ghildiyal Sir... </h4>  <hr />
    </Col>
   
    
  </Row>
  <Row sm="1" xs="1" md= "2">
    <Col sm={12} lg={5}>
       <Iframe url="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FTriyuginarayanvedicvivah%2Fvideos%2F363677897907552%2F&show_text=false&t=0"
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
   
    <Col sm={12} ><ul className={styles.listunstyled}>
   
   <li >DM sir appreciated the efforts of Ranjana Rawat and her team for promoting Triyuginarayan as a Uttarakhand Wedding Destination. 
          </li>
 <li>Ranjana & Deepak are promoting Triyuginarayan as a wedding destination since 2017.</li>
 <li> In 2019 they themself got married at this place. Till date they have organized more than twenty weddings at this place.</li>
<li>@Triyugiweddings is extremely thrilled to offer booking deals that cater to this increasingly important requirement of our customers.
<a href="mailto:triyugiweddings@gmail.com?body=My custom mail body">E-Mail to @triyugi-weddings</a></li>

       
          </ul>
</Col>

  </Row>
 
</Container>





        
        
        
        

 
</div>
 
        )
    }
}
