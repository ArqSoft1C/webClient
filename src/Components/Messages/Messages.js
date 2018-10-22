import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {Row, Col, Button, Card, CardTitle} from 'react-materialize'
import { Switch, Route } from 'react-router-dom'
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
        query:"messageByReceptor (username:"+"david"+") {\n allMessages {\n user1\n subject\n content\n}\n}",variables:null
    })
 
    .then(res => {
        const eventos = res.data;
        const b = eventos[0].user1;
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
                <Row>
                  { this.state.eventos.map(evento =>
                  <div>
                    <Col m={4} s={12}>
                      <Card className='' textClassName=''>
                      <h6>Mensaje de {evento.user1}</h6>
                      <p>{evento.content}</p>
                      </Card>
                    </Col>
                  </div>
                 )}
                </Row>
                <MessageS />
              </Card>
            </Col>
          </Row>
          <div style={{'margin-bottom':'200px'}}>
              
          </div>
        </div>
        )
      }
    }





 
 

