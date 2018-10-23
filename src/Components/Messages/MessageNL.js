import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {Row, Col, Button, Card, CardTitle} from 'react-materialize'

export default class MessagesNL extends Component {
 render() {
    return (
    <div>
    <div>
        <Row>
          <Col l={3} className='grid-example'></Col>
          <Col l={6} className='grid-example'>
            <Card className=''>
                <h4><b>Mensajes</b></h4>
  				Regístrate como jugador para poder comunicarte con otros usuarios, comparte tu disponibilidad de tiempo para jugar y tus estadísticas.<br/>
				
            </Card>
          </Col>
        </Row>
        </div>
    </div>
    )
  }
}
