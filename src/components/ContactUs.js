import React, { Component } from 'react';
import ReactWhatsapp from 'react-whatsapp';
import styles2 from './ContactUs.Module.css' ;
import { Button,  Container, Col,  Row} from 'react-bootstrap';


import Iframe from 'react-iframe'

export default class ContactUs extends Component {
    render() {
        return (
          <>
            <div className="bg-dark text-white ">
              <Container className={styles2.contact}>
                <Row className="justify-content-md-center">
                  <Col>
                    <h2 arial-level="2">
                      Contact Us <hr />
                    </h2>
                  </Col>
                </Row>
                <Row sm="1" xs="1" md="1" lg="2">
                  <Col sm={12} lg={5}>
                    <img
                      src="./images/triuyugi14.jpg"
                      style={{ maxHeight: "100%", maxwidth: "auto" }}
                      className="img-fluid shadow-4"
                      alt="here is"
                    />{" "}
                  </Col>

                  <Col sm={12}>
                    {" "}
                    <h2>
                      Better yet, see us in person! <hr className="my-1" />
                    </h2>{" "}
                    <p>
                      <b>Triyuginarayan Vedic Vivah Planner</b>
                      <br />
                      Triyuginarayan Temple, Trijuginarayan, <br /> Uttarakhand,
                      India <br />
                      Contact No.-070603 26489
                    </p>{" "}
                    <hr />
                    <p>
                      <Button>
                        {" "}
                        <img
                          src="./images/phoneicon.jpg"
                          className="img-fluid shadow-4 wtsapp"
                          alt="here is"
                        />{" "}
                      </Button>{" "}
                      <a href="tel:+917060326489">+91 70603 26489</a>{" "}
                    </p>
                    <p>
                      <ReactWhatsapp
                        number="+91 70603 26489"
                        message="Hi I am planning for destination wedding in Triyuginarayan. Can you guide me in booking the services!!!"
                      >
                        <img
                          src="./images/whatsapplogo.png"
                          className="img-fluid shadow-4 wtsapp"
                          alt="here is"
                        />{" "}
                      </ReactWhatsapp>{" "}
                      message on whatsapp
                      <br />
                      <a
                        href="https://www.facebook.com/Triyuginarayanvedicvivah/"
                        className="btn btn-primary btn-md"
                      >
                        <img
                          src="./images/facebooklogo.png"
                          className="img-fluid shadow-4 wtsapp"
                          alt="here is"
                        />
                      </a>{" "}
                      Connect to our facebook page
                      <hr />
                      <br />{" "}
                      <a href="mailto:triyugiweddings@gmail.com?body=Hi I am planning for destination wedding in Triyuginarayan. Can you guide me in booking the services!!!">
                        E-Mail to @triyugi-weddings
                      </a>{" "}
                      <br />
                      Email-id - triyugiweddings@gmail.com
                      <br />
                      WhatsApp No.- +91 70603 26489
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
            <br />
            <div className="bg-dark text-white ">
              <Container className={styles2.contact}>
                <Row className="justify-content-md-center">
                  <Col>
                    <h2 arial-level="2">
                      Facts about Triyuginarayan temple
                      <hr />
                    </h2>
                  </Col>
                </Row>
                <Row sm="1" xs="1" md="1" lg="2">
                  <Col sm={12} lg={5}>
                    <p>
                      {" "}
                      <li>
                        Triyuginarayan Temple is a Hindu temple located in the
                        village in Rudraprayag district, Uttarakhand. The
                        ancient temple is dedicated to god Vishnu.
                      </li>
                      <li>
                        Triyuginarayan Vedic Vivah Planner offers 'Vedic
                        wedding' (traditional Indian Hindu wedding) planning,
                        styling and catering services in Triyuginarayan.
                      </li>
                      <li>
                        This Vedic wedding includes Vedic yajna- rituals around
                        Akhand Dhuni. Akhand dhuni is the perpetual flame which
                        is believed to burn from the time of the divine marriage
                        of Lord Shiv and Goddess Parvati.
                      </li>
                      <li>
                        We add the local touch in the weddings with music
                        (Maangal Geet), traditional food and local religious
                        traditions.
                      </li>
                      <li>
                        If the couple wish the wedding to be performed in their
                        own tradition, then the wedding is performed in their
                        own tradition followed by the local rituals.
                      </li>
                      <li>
                        The couple takes seven vows of commitment to the
                        marriage (phere) around the akhand dhuni.
                      </li>
                      <li>
                        Beside planning, styling and catering services we also
                        provide additional services like transportation, wedding
                        photography, bridal makeup and bridal dresses on rent,
                        according to the requirement.
                      </li>
                      <li>
                        GMVN Triyuginarayan Cottage with 16 rooms is available
                        for the luxury stay during wedding. GMVN Triyuginarayan
                        Cottage rooms are equipped with all the modern
                        conveniences.
                      </li>
                      <li>
                        We are extremely thrilled to offer booking deals that
                        cater to this increasingly important requirement of our
                        customers.
                      </li>
                      <li>
                        <a href="mailto:triyugiweddings@gmail.com?body=Hi I am planning for destination wedding in Triyuginarayan. Can you guide me in booking the services!!!">
                          E-Mail to @triyugi-weddings
                        </a>
                      </li>{" "}
                    </p>
                  </Col>

                  <Col sm={12}>
                    {" "}
                    <Iframe
                      url="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F
Triyuginarayanvedicvivah%2Fvideos%2F405450230843195%2F&show_text=false&width=380&t=0"
                      width="100%"
                      height="750"
                      id="myId"
                      className="myClassname"
                      display="initial"
                      position="relative"
                      styles={{
                        height: "25px",
                        topmargin: "20px",
                        width: "100%",
                        border: ".2px solid black",
                      }}
                      margin="20px"
                      allow="autoplay"
                    />
                  </Col>
                </Row>
              
              </Container>
         
            </div>
          
           
         
          </>
        );
    }
}
