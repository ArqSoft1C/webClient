import React, { Component } from "react";
import { Link } from 'react-router-dom';
import MessageS from './MessageS';
import {Row, Col, Button, Card, CardTitle} from 'react-materialize'


export default class MessagesM extends Component {
     state = {
    eventos: []
  }
    //<a href="/MensajeNL" class="btn btn-primary green darken-4">Enviados</a>
    render() {
        return (
        <div>
          <Row>
            <Col l={2} m={1} className='grid-example'></Col>
            <Col l={8} m={10} s={12} className='grid-example'>
            <br></br>
              <Card className='' textClassName=''actions={[<Link to={`/mensajes`}>ver</Link>]}>
                <h4 font ><b>Mensajes recibidos</b></h4>
              </Card> 
              <Card className='' textClassName=''actions={[<Link to={`/mensajes2`}>ver</Link>]}>
                <h4 font ><b>Mensajes Enviados</b></h4>
              </Card> 
                
                <MessageS />                             
            </Col>
          </Row>
          
        </div>
        )
      }
    }





 
 

