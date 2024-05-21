import React from 'react';
import styles2 from'./History.module.css';
import {  Container, Col, Row, Card,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from'./WeddingCost.module.css';
import VideosOnly from './VideosOnly'

function History () {
    return( <> 
   <div className="bg-dark text-white">
        
    <Container>
      <Row className="justify-content-md-center">
        <Col>
        <h2 arial-level="2" >History of Triyuginarayan temple <hr /></h2>
        </Col>
       
        
      </Row>
      <Row sm="1" xs="1" md= "1" lg = "2">
        <Col sm={12} lg={5}><img src='./images/triyugi17.jpg' style={{maxHeight: "100%", maxwidth: "auto"}} className='img-fluid shadow-4' alt='here is'/ > </Col>
       
        <Col sm={12} ><ul className={styles.listunstyled}>
       
    <li >Triyuginarayan is the venue of the celestial marriage of Shiva and Parvati.</li>
     <li>Lord Vishnu witnessed the wedding as Parvati’s brother.Triyuginarayan temple is at the
		 elevated height of 1,980 meters surrounded by beautiful mountains .</li>
    <li>This temple is one 
		 of the popular temple of Uttarakhand located in the Rudraprayag district. There is a natural water stearm in the 
		 courtyard of the temple which fills the kunds (holy bathing pond) near the temple.</li> 
   
    <li>There is a natural water stream in the 
		 courtyard of the temple which fills the kunds (holy bathing pond) near the temple. This 
		 flame is believed to be burning from the times of the celestial marriage of Shiva and Parvati. 
		 Thus, the temple is also known as Akhand Dhuni temple, “Akhand” means perpetual and “Dhuni” means flame.</li>
    <li> It is beleived that this temple is built by Adi Shankaracharya.The present shrine is also called
		 as Akhand Dhuni temple. Akhand dhuni is a perpetual fire that burns in front of the temple.</li>
    <li>Akhand dhuni is a perpetual fire that burns in front of the temple. This 
		 flame is believed to be burning from the times of the celestial marriage of Shiva and Parvati.</li></ul>
    </Col>
    
    </Row>
    </Container>
    
   
   </div>
   <br/>
  <Container>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/dhol.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black', }}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/history1.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/history2.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/food.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
            
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/doli1.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
            
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/akhandDhuni1.jpg" className = { styles2.cardimg} />
            <Card.Body>
            
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
             
            </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/dhol.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
          
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/TriyugiNightView.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
            
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/akhandhuni.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}> Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
          </Container>
         
          <VideosOnly/>
   
 


 
  
  
</>
    )
}
export default History