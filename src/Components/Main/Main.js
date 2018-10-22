import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Layouts/Home';
import Login from '../User/Login';
import Teams from '../Teams/Teams';
import Matches from '../Matches/Matches';
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
    <Route exact path='/partidos' component={Matches}/>
    <Route exact path='/canchas' component={Courts}/>
    <Route exact path='/mensajes' render={()=>(
     !!sessionStorage.jwt ? (<Redirect to='/messages' />) : (<MessagesNL />))}/>
    
    <Route exact path='/perfil' component={Profile}/>
  </Switch>
)

export default Main
