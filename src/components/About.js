import React, { Component } from 'react';
import { Container, Row, Col,} from 'react-bootstrap';
import styles from'./About.module.css';
import WeddingCost from './WeddingCost'



export default class About extends Component {
    render() {
        return (<div className="bg-dark text-white">
        
<Container>
  <Row className="justify-content-md-center">
    <Col>
    <h2 arial-level="2" >About Us <hr /></h2>
    </Col>
   
    
  </Row>

  
  <Row>
    <Col md="auto" ><img src='./images/rajanadeep1.jpg' style={{height: "auto", maxwidth: "100%"}} className='img-fluid shadow-4' alt='here is'/ > </Col>
   
    <Col  ><ul className={styles.listunstyled}>
    <li>Triyuginarayan Vedic Vivah Planner are promoting Trijuginarayan as a wedding destination of Uttarakhand.</li>  
<li >Triyuginarayan Vedic Vivah Planner offers 'Vedic wedding' (traditional Indian Hindu wedding) planning, styling and catering services in Triyuginarayan.</li>

 <li>This Vedic wedding includes Vedic yajna- rituals around Akhand Dhuni. Akhand dhuni is the perpetual flame which is believed to burn from the time of the divine marriage of Lord Shiv and Goddess Parvati.</li>
<li>We add the local touch in the weddings with music (Maangal Geet), traditional food and local religious traditions.</li> 
<li>If the couple wish the wedding to be performed in their own tradition, then the wedding is performed in their own tradition followed by the local rituals.</li>
<li>The couple takes seven vows of commitment to the marriage (phere) around the akhand dhuni.</li>
<li>Beside planning, styling and catering services we also provide additional services like transportation, wedding photography, bridal makeup and bridal dresses on rent, according to the requirement.</li>
<li>GMVN Triyuginarayan Cottage with 16 rooms is available for the luxury stay during wedding. GMVN Triyuginarayan Cottage  rooms are equipped with all the modern conveniences.</li>
<li>We are extremely thrilled to offer booking deals that cater to this increasingly important requirement of our customers.</li>
<li><a href="mailto:triyugiweddings@gmail.com?body=My custom mail body">E-Mail to @triyugi-weddings</a></li> 

        
</ul>
</Col>

</Row>

</Container>
<hr/>
<WeddingCost/>

</div>
 
        )
    }
}
