import React from 'react';
import {Footer} from 'react-materialize'

export default props => 
    <div>
    <Footer copyrights="2018 Picaditos2.0"
      links={
        <ul>
          <li><a className="grey-text text-lighten-3" href="#!">Equipos</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Partidos</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Canchas</a></li>
        </ul>
      }
    >
    </Footer>
    </div>