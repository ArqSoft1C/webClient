import React, { Component } from "react";
import {Row, Col, Button, Card, CardTitle} from 'react-materialize'
import axios from 'axios';
import * as consts from '../../consts';
import { print } from 'graphql';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'

export default class MyTeams extends Component {
    state = {
        teams: [],
    }
    componentDidMount(){
        const LOGIN = gql`
        query TeamByPlayer($player_name:String!){
            teamByPlayer(player_name:$player_name){
                name
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
            this.setState({ teams:res.data.data.teamByPlayer });
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
                        <Link to={`/equipo/${team.id}`}>
                            <img src={require('../../Images/team.jpg')} className="img-responsive profile-img"/>
                            <h4>{team.name}</h4>
                        </Link>
                        </Col>
                        )}
                    </Row>
                </Card>
        )
    }
}
