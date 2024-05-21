import React, { Component } from 'react';
import styles from'./ContactUs.Module.css';
import { Container, Row, Col,  Card,} from 'react-bootstrap';
import styles2 from'./History.module.css';
import { Link } from 'react-router-dom';
import VidesOnly from './VideosOnly'

export default class ContactUs extends Component {
    render() {
        return (
            <>
            <h1 className= {styles.h1}>PHOTO GALLERY <hr/></h1>


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
            <Card.Img variant="middle" src="./images/decor1.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/media1.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/doli1.jpg" className = { styles2.cardimg} />
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
            <Card.Img variant="middle" src="./images/DulhanRanju2.jpg" className = { styles2.cardimg} />
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


            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/couple1.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black', }}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/couple2.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/couple3.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/dulhanRanju1.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black', }}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/decor2.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/decor3.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/jaimala1.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black', }}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/jaimala2.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/jaimala4.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/sindoor.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black', }}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/swagat1.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/sangeet1.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/dulhan1.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black', }}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/grouppic1.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/image2.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/decor1.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black', }}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/decor2.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/decor3.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/haldi1.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black', }}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/haldi2.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/haldi3.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/mehndi2.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black', }}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/ladiesbeauty.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/jaimala4.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/mountainBeauty.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black', }}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/triyugi17.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/ranjana pic yellowdress1.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/triyugi12.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black', }}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/triyugi1.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/triback.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/haldi5.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black', }}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/ranjanamain.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/triyugi16.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/triyugiEveview.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black', }}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/TriyugiImage4.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/triyugiImage3.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/food1.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black', }}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/triyugi18.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/snow1.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/snow2.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black', }}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/snow3.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/snow4.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/snow5.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black', }}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/gagar.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/ranjanayello2.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/dulhan2.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black', }}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/dulhan3.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/dulhan4.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg ={3}>
              <Col><Card style={{ color: 'black', width: '30rem' }}>
            <Card.Img variant="top" src="./images/ranjanayello3.jpg" className = { styles2.cardimg} />
            <Card.Body>
             
              <Card.Text style={{ color: 'black', }}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
             
              </Card.Text>
            
            </Card.Body>
          </Card></Col>
              <Col ><Card style={{ width: '30rem' }}>
            <Card.Img variant="middle" src="./images/triyugi19.jpg" className = { styles2.cardimg} />
            <Card.Body>
      
              <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
      
            </Card.Body>
          </Card></Col>
              <Col><Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="./images/triyugi20.jpg" className = { styles2.cardimg} />
            <Card.Body>
             <Card.Text style={{ color: 'black'}}>Pic credit: @Triyugiweddings <Link a href="https://www.facebook.com/Triyuginarayanvedicvivah/" >Connect to our facebook page</Link>
              </Card.Text>
             </Card.Body>
          </Card></Col>
            </Row>

          </Container>
  
      <VidesOnly/>

  </>
        )
    }
}
