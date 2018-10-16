import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../Layouts/Home'
import Teams from '../Teams/Teams'
import Login from '../User/Login'

const Main = () => (
        <Switch>
          <Route exact path='/' render={()=>( (<Home />) )}/>
          <Route exact path='/login' render={()=>(
            !!sessionStorage.jwt ? (<Redirect to='/' />) : (<Login />))}/>
          <Route exact path='/equipos' component={Teams}/>
        </Switch>
)

export default Main
