import React from 'react';
import { Route  , Link } from 'react-router-dom'
import {Button, Icon, NavItem, Navbar} from 'react-materialize'

var logo = <Link to='/'>Picaditos</Link>

//brand render picaditos logo
export default () => (
    <Navbar brand={logo} right> 
      <NavItem ><Link to='/equipos'>Equipos</Link></NavItem>
      <NavItem >Partidos</NavItem>
      <NavItem >Canchas</NavItem>
      <NavItem href=''><Icon>search</Icon></NavItem>
      <NavItem href=''><Icon>view_module</Icon></NavItem>
      <NavItem href=''><Icon>refresh</Icon></NavItem>
      <NavItem href=''><Icon>more_vert</Icon></NavItem>
    </Navbar>
)