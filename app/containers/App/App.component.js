import PropTypes from 'prop-types';
import React from 'react';
import Nav from '../Nav/Nav.component';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import Root from '../Root'
require('./App.component.scss');

const App = ({
    store,
    history
}) => {
    return ( 
    <Provider store = { store } > 
      <div className="App">
        <Nav></Nav>
        <div className="App-container">
          <Root history={history}></Root>
        </div>
      </div>
    </Provider>
  );
}

App.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default App;