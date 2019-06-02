import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../index.css';
import MemeItem from './MemeItem';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {myMems }from '../component/myMems';

 class MemeList extends Component {
     constructor(){
         super();
         this.state={
             memeLimit:10,
             text0:'',
             text1:'',
         }
     }
    render() {
        return (
           <div className="body">
              
   <h3><u>Welcome To the meme generator!</u></h3>
                <myMems/>
      <h4><i>Write some text</i></h4>
     
      <Row form>
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
          
             
            {
                this.props.memes.slice(0,this.state.memeLimit).map((meme,index) =>{
                    return(
                        <MemeItem
                         key={index}
                         meme={meme}
                         text0={this.state.text0}
                         text1={this.state.text1}/>

                    )

                })

            }
                <div className="meme-button"onClick={()=> this.setState({memeLimit:this.state.memeLimit+10})}>
                    Load 10 more memes....
                </div>
            </div>
        ) 
    
        }}  
        

function mapStateToProps(state){
    return state;
}

 export default connect(mapStateToProps, null) (MemeList);
