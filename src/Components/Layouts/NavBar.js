import React, { Component } from 'react';
import { Route  , Link } from 'react-router-dom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import * as sessionActions from '../../Actions/sessionActions.js'
import session from '../../Reducers/sessionReducer.js'; 

import {Button, Icon, NavItem, Navbar} from 'react-materialize';

var logo = <Link to='/'>Picaditos</Link>

class NavBar extends Component {
  constructor(props){
    super();
    this.logout = this.logout.bind(this);
    this.userBar = this.userBar.bind(this);
  }
  
  logout (event) {
    event.preventDefault();
    this.props.actions.logoutUser();
    window.location.reload();
  }
  userBar (logged){
    if(logged.logged){
      return (
        <div >
          <Button waves='light' className='green darken-4'><Link to='/perfil'>Perfil</Link></Button>
          <Button waves='light' onClick={this.logout} className='green darken-4' >Cerrar Sesión</Button>
        </div>
      )
    }
    else{
      return( 
        <div>
          <Button waves='light'><Link to='/login'>Ingresar</Link></Button> 
        </div>
      )
    }
  }
  render () {
    return(
      <Navbar brand={logo} right className='green darken-3'> 
        <NavItem ><Link to='/equipos'>Equipos</Link></NavItem>
        <NavItem ><Link to='/partidos'>Partidos</Link></NavItem>
        <NavItem ><Link to='/canchas'>Canchas</Link></NavItem>
        <NavItem ><Link to='/Mensajes'>Mensajes</Link></NavItem>
        <NavItem href=''><this.userBar logged={this.props.logged_in}/></NavItem>
      </Navbar>
    )
  }
}
NavBar.propTypes={
  actions: PropTypes.object.isRequired
}
function mapStateToProps(state, ownProps) {
  return {
    logged_in: state.session
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
