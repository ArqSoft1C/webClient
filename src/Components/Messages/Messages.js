import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {Row, Col, Button, Card, CardTitle} from 'react-materialize'
import axios from 'axios';
import MessageS from './MessageS';
import * as consts from '../../consts';
var a;

export default class Messages extends Component {
     state = {
    eventos: []
  }
  componentDidMount() {
    console.log("llega")
    axios.post(consts.GRAPHQL_URL, {
    //axios.get(`http://192.168.99.102:4003/message`)
    //,{
      "query":"query{\n  messageByReceptor(username:\""+JSON.parse(sessionStorage.user).username+"\"){\n    user1\n    subject\n    content\n  }\n}","variables":null
    })
 
    .then(res => {
        const eventos = res.data.data.allMessages;
        const b = eventos[0].user1
        this.setState({ eventos });
        //a=JSON.stringify(b)
        console.log(eventos)
        })
    .catch(function (error) {
        console.log(error)
    });
    }
    //<a href="/MensajeNL" class="btn btn-primary green darken-4">Enviados</a>
    render() {
        return (
        <div>
          <Row>
            <Col l={2} m={1} className='grid-example'></Col>
            <Col l={8} m={10} s={12} className='grid-example'>
            <br></br>
              <Card className='' textClassName=''>
                <h4 font ><b>Mensajes recibidos</b></h4>

                
          
                
              </Card> 
              
                <Row>
                <Card className='' textClassName=''> 
                  { this.state.eventos.map(evento =>
                  <div>
                   
                      <Card className='' textClassName='' actions={[<Link to={`/MensajeNL`}>Ver</Link>]}>
                      <h5>Mensaje de {evento.user1}</h5>
                      <p>{evento.subject}</p>
                      </Card>

                  </div>
                 )}
                   
                </Card>
                </Row>
                <MessageS />                             
            </Col>
          </Row>
          
        </div>
        )
      }
    }





 
 

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {Row, Col, Button, Card, CardTitle} from 'react-materialize'
import axios from 'axios';
import MessageS from './MessageS';
import * as consts from '../../consts';
var a;

export default class Messages extends Component {
     state = {
    eventos: []
  }
  componentDidMount() {
    console.log("llega")
    axios.post(consts.GRAPHQL_URL, {
    //axios.get(`http://192.168.99.102:4003/message`)
    //,{
      "query":"query{\n  allMessages{\n    user1\n    subject    \n content \n  }\n}","variables":null
    })
 
    .then(res => {
        const eventos = res.data.data.allMessages;
        const b = eventos[0].user1
        this.setState({ eventos });
        //a=JSON.stringify(b)
        console.log(eventos)
        })
    .catch(function (error) {
        console.log(error)
    });
    }

    render() {
        return (
        <div>
          <Row>
            <Col l={2} m={1} className='grid-example'></Col>
            <Col l={8} m={10} s={12} className='grid-example'>
            <br></br>
              <Card className='' textClassName=''>
                <h4><b>Mensajes recibidos</b></h4>
              </Card> 
              
                <Row>
                <Card className='' textClassName=''> 
                  { this.state.eventos.map(evento =>
                  <div>
                   
                      <Card className='' textClassName='' actions={[<Link to={`/MensajeNL`}>Ver</Link>]}>
                      <h6>Mensaje de {evento.user1}</h6>
                      <p>{evento.subject}</p>
                      </Card>
                    
                  </div>
                 )}
                </Card>
                </Row>
                <MessageS />
              
            </Col>
          </Row>
          <div style={{'margin-bottom':'200px'}}>
              
          </div>
        </div>
        )
      }
    }





 
 

