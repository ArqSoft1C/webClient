import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {Row, Col, Button, Card, CardTitle} from 'react-materialize'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios';
var a;

export default class Messages extends Component {
     state = {
    eventos: []
  }
   componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users `)
      .then(res => {
        const eventos = res.data;
      	const b = eventos[0].name;
        
        this.setState({ eventos });
        a=JSON.stringify(b)
        
        console.log(a)
       
      })
  }
    
 render() {
    return (
    <div>
    { this.state.eventos.map(evento =>
    <div>
        <Row>
          <Col l={3} className='grid-example'></Col>
          <Col l={6} className='grid-example'>
            <Card className=''>
                <h4><b>Mensajes</b></h4>
  			    	<h1>
		  		    {evento.name}
		  	        </h1>
            </Card>
          
            <Card className=''>
               <Button floating icon='add' className='red' href="/Canchas"/> Nuevo mensaje     
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
    )}
    </div>
    )
  }
}




