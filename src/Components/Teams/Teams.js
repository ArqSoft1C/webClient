import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {Row, Col, Button, Card, CardTitle} from 'react-materialize'

export default class Equipos extends Component {
 render() {
    return (
    <div>
    <div>
        <Row>
          <Col l={3} className='grid-example'></Col>
          <Col l={6} className='grid-example'>
            <Card className='center-align'>
                <h2><b>Equipos</b></h2>
  				Regístrate como jugador para obtener la calificación de otros usuarios, comparte tu disponibilidad de tiempo para jugar y tus estadísticas.<br/>
				Crea equipos, añade miembros y busca jugadores!<br/>
				Consulta canchas disponibles para jugar!
            </Card>
          </Col>
        </Row>
        <div style={{'margin-bottom':'200px'}}>
            <Button floating fab='vertical' faicon='fa fa-plus' className='red' icon='add' large style={{bottom: '45px', right: '24px'}}>
                <Button floating icon='insert_chart' className='red'/>
                <Button floating icon='format_quote' className='yellow darken-1'/>
                <Button floating icon='publish' className='green'/>
                <Button floating icon='attach_file' className='blue'/>
            </Button>
        </div>
    </div>
    </div>
    )
  }
}
