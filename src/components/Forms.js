
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';



class Forms extends Component{
  constructor(){
    super()
    this.state = {
      fullName:'',
      username:'',
      email:'',
      password:''
    }
    this.changeFullName = this.changeFullName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  changeFullName(event){
    this.setState({
      fullName:event.target.value
})
  }
  changeUsername(event){
    this.setState({
      username:event.target.value
})
  }
  changeEmail(event){
    this.setState({
      email:event.target.value
})
  }
  changePassword(event){
    this.setState({
      password:event.target.value
})

  }
  onSubmit(event){
    event.preventDefault()

    const registered = {
      fullName: this.state.fullName,
      username:this.state.username,
      email:this.state.email,
      password:this.state.password
    }
    axios.post('http://localhost:4000/app/signup', registered)
    .then(response => console.log(response.data))

    this.setState({
      fullName:'',
      username:'',
      email:'',
      password:''
    })
  }
    render(){
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
        <Col>Have any question? We'd like to hear from you.</Col>
          <Row xs={1} md={2}>
        
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>first Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  onChange={this.changeFullName}
                  value={this.state.fullName}
                  className="form-control form-group"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  onChange={this.changeUsername}
                  value={this.state.username}
                  className="form-control form-group"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row xs={1} md={2}>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Enter Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={this.changeEmail}
                  value={this.state.email}
                  className="form-control form-group"
                />
              </Form.Group>
            </Col>

            <Col md="auto">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={this.changePassword}
                  value={this.state.password}
                  className="form-control form-group"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row xs={1} md={2}>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Enter Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={this.changeEmail}
                  value={this.state.email}
                  className="form-control form-group"
                />
              </Form.Group>
            </Col>

            <Col md="auto">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={this.changePassword}
                  value={this.state.password}
                  className="form-control form-group"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row xs="auto">
            <Col>
              <Button variant="primary" type="Submit" value="Submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
}
}
export default Forms;

