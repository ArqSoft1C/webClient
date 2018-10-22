import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Row, Col, Button, Card, CardTitle, Modal, Input} from 'react-materialize';
import * as consts from '../../consts';


export default class MessageS extends Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      user1: "",
      user2: "",
      subject: "",
      content:"",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = event => {
    console.log(event.target)
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  
  postTeam() {
    axios.post(consts.GRAPHQL_URL,{
      
      "query":"mutation {\n  createMessage(message: {\n    user1: \"samael\"\n    user2: \"garayff\"\n    subject: \"Jeissons\"\n    content: \"no hay clases\"\n  }) {\n    user1\n    user2\n    subject\n  }\n}","variables":null
 
    })
      .then(response => {
        console.log(response)
      	//this.setState({ teams });
      })
      .catch(function (error) {
        console.log(error)
      });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    //this.props.actions.loginUser(this.state);
    this.postTeam();
    console.log(this.state);
    //window.location.reload();
  }
  
  render() {
    return (
      <Modal
        header='Enviar Mensaje'
        fixedFooter
        trigger={<div className='fixed-action-btn'><Button floating fab='vertical' className='red' modal='confirm'
                icon='add' large style={{bottom: '45px', right: '24px'}}>
        </Button></div>}
        actions={[<Button onClick={this.handleSubmit}>Send</Button>]}>
        <Row>
          <Input s={12} label="Para" id='user2' onChange={this.handleChange} />
          <Input s={12} label="Asunto" id='subject' onChange={this.handleChange} />
          <Input s={12} label="Contenido" id='content' onChange={this.handleChange} />
        </Row>
      </Modal>
    );
 }
}