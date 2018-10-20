import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Row, Col, Button, Card, CardTitle} from 'react-materialize';

export default class Team extends Component {

  constructor(props,context) {
    super(props,context);
  }

  state = {
    team: [], members: []
  }

  componentDidMount() {
    axios.post('http://192.168.99.102:5000/graphql?',{
      query:"query{\nteamById(id:\""+this.props.match.params.id+"\"){\nname\ncapitan_un\nmiembros\n}\n\n}","variables":null
    })
      .then(response => {
        var team = response.data.data.teamById
        var members = response.data.data.teamById.miembros
        this.setState({team});
        this.setState({members});
      })
      .catch(function (error) {
        console.log(error)
      });
  }
  
  renderUsers(props){
    var miembros = props.miembros;
    
    var list = []
    
    if(miembros){
      list = miembros.map(miembro => 
        <h5>{miembro}</h5>
      );
    }
    
    return list  
  }

  
  render() {
  	return (
      <div>
      <Card className=''
        header={<CardTitle image='../../Images/banner.jpg'>Card Title</CardTitle>}>
        <h4>{this.state.team.name}</h4>
        <this.renderUsers miembros={this.state.team.miembros} />
        {console.log("memb",this.state.team.miembros)}
      </Card>
  	  </div>
    )
  }
}