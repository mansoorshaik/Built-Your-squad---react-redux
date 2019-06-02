import React, { Component } from 'react';
import './App.css';
import '../src/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//import {connect} from 'react-redux';
//import Input from './actions/input'



class App extends Component {
  constructor(){
    super();
    this.state={
        text0:'',
        text1:'',
    }
}
  render() {

    return (
      <div className="body centre">
   <h3><u>Welcome To the meme generator!</u></h3>
      <h4><i>Write some text</i></h4>
      {/* <Row form>
          <Col md={4}>
        <FormGroup>
          <Label >Top</Label>
          <Input type="text"   
          onChange={event => this.setState({text1:event.target.value})} />
        </FormGroup>
        <FormGroup>
          <Label >Buttom</Label>
          <Input type="text"  
          onChange={event => this.setState({text0:event.target.value})} />
        </FormGroup>
        </Col>
        </Row>
        {''} */}
        {/* <Row form>
          <Col md={4}>
       
        </Col>
        </Row> */}
  
     </div>
     )
}
}


export default ( App);
