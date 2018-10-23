import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { print } from 'graphql';
import gql from 'graphql-tag';
import axios from 'axios';
import {Row, Col, Card, CardTitle, Collapsible, CollapsibleItem} from 'react-materialize'
import * as consts from '../../consts';
import Create from './Create';
const style =  {width: '18vw', height: '15vw', position: 'relative'}



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

    MatchCreate(props){
      if(props.user == null)
        return null
      else
        return <Create />
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
              <Card className='' textClassName='' title={title} 
              actions={[<Link to={`/partido/${match.id}`}>mas..</Link>]} style={style}>
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
              <Card className='' textClassName='' title={teams[match.team_home_id] + " Vs. " + teams[match.team_away_id]}
              actions={[<Link to={`/partido/${match.id}`}>mas..</Link>]} style={style} >
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
        <Row>
        <Col l={2} m={1} className='grid-example'></Col>
        <Col l={8} m={10} s={12} className='grid-example'>
        <Card header={<CardTitle image={require('../../Images/field3.jpg')}></CardTitle>}>
        <Collapsible>       
            <CollapsibleItem header={<h4><b>Partidos Futuros</b></h4>}>
            <Row>
              { this.state.matches.map(match =>
               <this.CurrentMatch match={match} teams={this.state.teams} />
              )}
            </Row>
            </CollapsibleItem>
            <CollapsibleItem header={<h4><b>Partidos Jugados</b></h4>}>
            <Row>
              { this.state.matches.map(match =>
               <this.PastMatch match={match} teams={this.state.teams} />
              )}
            </Row>
            </CollapsibleItem>
          </Collapsible>
          <this.MatchCreate user={sessionStorage.user}/>
          </Card>
          </Col>
        </Row>
        </div>
    )
  }
}
