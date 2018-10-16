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
          <Button waves='light' onClick={this.logout} >Log out</Button>
        </div>
      )
    }
    else{
      return( 
        <div>
          <Button waves='light'><Link to='/login'>Sign In</Link></Button>
          <Button waves='light'>Sign out</Button>
        </div>
      )
    }
  }
  render () {
    return(
      <Navbar brand={logo} right> 
        <NavItem ><Link to='/equipos'>Equipos</Link></NavItem>
        <NavItem ><Link to='/partidos'>Partidos</Link></NavItem>
        <NavItem ><Link to='/canchas'>Canchas</Link></NavItem>
        <NavItem href=''><Icon>search</Icon></NavItem>
        <NavItem href=''><Icon>view_module</Icon></NavItem>
        <NavItem href=''><Icon>refresh</Icon></NavItem>
        <NavItem href=''><Icon>more_vert</Icon></NavItem>
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
