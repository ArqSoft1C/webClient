import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {Row, Col, Button, Card, CardTitle} from 'react-materialize'
import * as consts from '../../consts';
import { print } from 'graphql';
import gql from 'graphql-tag';
import axios from 'axios';

export default class Matches extends Component {

    state = {
      matches: [],
      teams: []
    }

    componentDidMount(){
        const teams = {}
        const MATCHES = gql`
        query allMatchesAndTeams{
            allMatches{
              id
              team_home_id
              team_away_id
              court_id
              played
              score_home
              score_away
              date
            }
            allTeams{
              name
              id
            }
        }
        `
        axios
        .post(consts.GRAPHQL_URL, {
            query: print(MATCHES),
            variables: {},
        })
        .then(res => {
            res.data.data.allTeams.forEach(team => {
              teams[team.id] = team.name
            });
            this.setState({ 
              matches:res.data.data.allMatches,
              teams: teams
             });
        })
        .catch(err => {throw(err);})
    }


    CurrentMatch(props){
      const match = props.match
      const teams = props.teams
      const date = new Date(match.date)
      let title = ""
      if(match.team_away_id === null)
        title="Abierto, creado por: "+teams[match.team_home_id]
      else
        title=teams[match.team_home_id] + " Vs. " + teams[match.team_away_id]
      if(!match.played){
        return(
          <div key={match.id}>
            <Col m={4} s={12}>
              <Card className='' textClassName='' title={title} >
                <h6>Se jugara el: {date.toLocaleDateString()}</h6>
              </Card>
            </Col>
          </div>
        )
      }else{
        return null
      }
    }

    PastMatch(props){
      const match = props.match
      const teams = props.teams
      const date = new Date(match.date)
      if(match.played){
        return(
          <div key={match.id}>
            <Col m={4} s={12}>
              <Card className='' textClassName='' title={teams[match.team_home_id] + " Vs. " + teams[match.team_away_id]} >
                <h6>Fue jugado el: {date.toLocaleDateString()}</h6>
              </Card>
            </Col>
          </div>
        )
      }else{
        return null
      }
    }
    render() {
    return (
        <div>
        <div>
        <Row>
        <Col l={2} m={1} className='grid-example'></Col>
        <Col l={8} m={10} s={12} className='grid-example'>
          <Card className=''>
            <h4><b>Partidos Futuros</b></h4>
            <Row>
              { this.state.matches.map(match =>
               <this.CurrentMatch match={match} teams={this.state.teams} />
              )}
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col l={2} m={1} className='grid-example'></Col>
        <Col l={8} m={10} s={12} className='grid-example'>
          <Card className=''>
            <h4><b>Partidos Jugados</b></h4>
            <Row>
              { this.state.matches.map(match =>
               <this.PastMatch match={match} teams={this.state.teams} />
              )}
            </Row>
          </Card>
        </Col>
      </Row>
        </div>
        </div>
    )
  }
}
