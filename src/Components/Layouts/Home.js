import React from 'react';
import {Row, Col, Button, Card, CardTitle} from 'react-materialize'

export default props => 
  <div>
    <Row>
      <Col l={3} className='grid-example'></Col>
      <Col l={6} className='grid-example'>
        <Card className='center-align'
            actions={[
              <div>
                <a href='/login'>Ingresa</a>
              </div>]}
        >
          <img className="responsive-img" src={require('../../Images/fireball.png')}  width="180"/>
          <h2><b>PICADITOS</b></h2>
	    		Regístrate como jugador para obtener la calificación de otros usuarios, comparte tu disponibilidad de tiempo para jugar y tus estadísticas.<br/>
		      Crea equipos, añade miembros y busca jugadores!<br/>
		      Consulta canchas disponibles para jugar!
        </Card>
      </Col>
    </Row>
  </div>