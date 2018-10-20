import React, { Component } from "react";
import {Row, Col, Button, Card, CardTitle} from 'react-materialize'
import axios from 'axios';
import * as consts from '../../consts';
import { print } from 'graphql';
import gql from 'graphql-tag';

export default class MyTeams extends Component {
    state = {
        teams: [],
    }
    componentDidMount(){
        const LOGIN = gql`
        query equipoByPlayer($player_name:String!){
            equipoByPlayer(player_name:$player_name){
                nombre
                id
          }  
        }
        `
        axios
        .post(consts.GRAPHQL_URL, {
            query: print(LOGIN),
            variables: {
                player_name: JSON.parse(sessionStorage.user).username
            },
        })
        .then(res => {
            this.setState({ teams:res.data.data.equipoByPlayer });
        })
        .catch(err => {throw(err);})
    }

    render() {
        return (
                <Card className=''>
                    <h3><b>Mis Equipos</b></h3>
                    <Row>
                    { this.state.teams.map(team =>
                        <Col>
                            <img src={require('../../Images/team.jpg')} className="img-responsive profile-img"/>
                            <h4>{team.nombre}</h4>
                        </Col>
                        )}
                    </Row>
                </Card>
        )
    }
}
