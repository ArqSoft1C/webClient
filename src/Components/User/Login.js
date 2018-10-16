import React, { Component , PropTypes } from "react";
import { Link } from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../../Actions/sessionActions.js'
import {Row, Col, Button, Card, Input, MediaBox } from 'react-materialize'

class Login extends Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.loginUser(this.state);
    window.location.reload();
  }

  render() {
    return (
      <Row>
        <Col m={4} className='grid-example'></Col>
        <Col m={4} className='center-align'>
          <img src={require('../../Images/fireball.png')} width="80"/>
          <h5>Ingresa a Picaditos!</h5>
          <Card className='center-align'
            actions={[<Button onClick={this.handleSubmit}>Sign in</Button>]}>
            <Row>
                <Input type="email" label="Email" id="email" s={12} />
                <Input type="password" label="password" id="password" s={12} />
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions,dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Login);