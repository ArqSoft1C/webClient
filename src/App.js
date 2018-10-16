import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import NavBar from './Components/Layouts/NavBar';
import Main from './Components/Main/Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <NavBar />
          <Main />
          <Footer/>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
