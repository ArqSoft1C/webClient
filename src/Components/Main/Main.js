import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Layouts/Home';
import Login from '../User/Login';
import Teams from '../Teams/Teams';
import Team from '../Teams/Team';
import Matches from '../Matches/Matches';
import Match from '../Matches/Match';
import Courts from '../Courts/Courts';
import Profile from '../User/Profile'
import Messages from '../Messages/Messages'
import MessagesNL from '../Messages/MessagesNL'
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
    <Route exact path='/mensajes' render={()=>(
      !!sessionStorage.jwt ? (<Messages/>) : (<MessagesNL />))}/>
    <Route exact path='/perfil' component={Profile}/>
    <Route exact path='/mensajeNL' component={MessagesNL}/> 
    
  </Switch>
)

export default Main
