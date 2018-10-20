import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Create from './Create';
import {Row, Col, Button, Card, CardTitle} from 'react-materialize';
import * as consts from '../../consts';

export default class Teams extends Component {
  state = {
    teams: []
  }
//temp  
  componentDidMount() {
    axios.post(consts.GRAPHQL_URL, {
        query:"query{\nallTeams{\nid\nname\ncaptain\nsport\n}\n}",variables:null
    })
      .then(response => {
        const teams = response.data.data.allTeams
        console.log(teams)
      	this.setState({ teams });
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
          <Card className=''>
            <h4><b>Equipos</b></h4>
            <Row>
              { this.state.teams.map(team =>
              <div>
                <Col m={4} s={12}>
                  <Card className='' textClassName='' title={team.name} 
                    actions={[<Link to={`/equipo/${team.id}`}>more..</Link>]}>
                    <h6>{team.capitan_un}</h6>
                    <h6>{team.sport}</h6>
                  </Card>
                </Col>
              </div>
             )}
            </Row>
            <Create />
          </Card>
        </Col>
      </Row>
      <div style={{'margin-bottom':'200px'}}>
          
      </div>
    </div>
    )
  }
}
