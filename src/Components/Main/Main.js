import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../Layouts/Home'
import Teams from '../Teams/Teams'

const Main = () => (
        <Switch>
          <Route exact path='/' render={()=>( (<Home />) )}/>
          <Route exact path='/equipos' component={Teams}/>
        </Switch>
)

export default Main
