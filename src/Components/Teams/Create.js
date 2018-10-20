import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Row, Col, Button, Card, CardTitle, Modal, Input} from 'react-materialize';
import * as consts from '../../consts';


export default class Create extends Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      name: "",
      sport: "",
      captain: "",
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
    axios.post(consts.GRAPHQL_URL, {
      query:"mutation{\ncreateTeam(team:{\nname: \""+this.state.name+"\"\nsport:\""+this.state.name+"\"\ncaptain: \""+this.state.captain+"\"\n}){\nname\n}\n}",variables:null
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
        header='Crear Equipo'
        fixedFooter
        trigger={<div className='fixed-action-btn'><Button floating fab='vertical' className='red' modal='confirm'
                icon='add' large style={{bottom: '45px', right: '24px'}}>
        </Button></div>}
        actions={[<Button onClick={this.handleSubmit}>Crear!</Button>]}>
        <Row>
          <Input s={12} label="Nombre" id='name' onChange={this.handleChange} />
          <Input s={12} label="capitan" id='captain' onChange={this.handleChange} />
          <Input s={12} type='select' id='sport' label="Deporte" defaultValue='futbol' onChange={this.handleChange}>
            <option value='futbol'>Futbol</option>
            <option value='micro'>Micro</option>
            <option value='fut-8'>Fut-8</option>
          </Input>
      </Row>
      </Modal>
    );
 }
}