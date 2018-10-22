import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Layouts/Home';
import Login from '../User/Login';
import Teams from '../Teams/Teams';
import Matches from '../Matches/Matches';
import Courts from '../Courts/Courts';
import Profile from '../User/Profile'
import Messages from '../Messages/Messages'
import MessagesNL from '../Messages/MessageNL'
import Team from '../Teams/Team';
import Match from '../Matches/Match'

const Main = () => (
  <Switch>
    <Route exact path='/' render={()=>( (<Home />) )}/>
    <Route exact path='/login' render={()=>(
      !!sessionStorage.jwt ? (<Redirect to='/equipos' />) : (<Login />))}/>
    <Route exact path='/equipos' component={Teams}/>
    <Route exact path='/equipo/:id' component={Team}/>
    <Route exact path='/partidos' component={Matches}/>
    <Route exact path='/partido/:id' component={Match}/>
    <Route exact path='/canchas' component={Courts}/>
    <Route exact path='/mensajes' component={Messages}/>    
    <Route exact path='/mensajeNL' component={MessagesNL}/> 
    <Route exact path='/perfil' component={Profile}/>
    <Route exact path='/mensajeNL' component={MessagesNL}/> 
    
  </Switch>
)

export default Main
