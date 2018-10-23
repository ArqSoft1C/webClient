import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux'; 
import configureStore from './Store/configureStore';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import Footer from './Components/Layouts/Footer';
import NavBar from './Components/Layouts/NavBar';
import Main from './Components/Main/Main';
import './App.css';


const store = configureStore();

class App extends Component {
  render() {
    return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <NavBar />
          <Main />
        </Fragment>
      </BrowserRouter>
    </Provider>
    </MuiPickersUtilsProvider>
    );
  }
}

export default App;
