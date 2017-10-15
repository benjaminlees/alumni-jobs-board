import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import {
    Router,
    Route,
    browserHistory
} from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import App from '../components/App/App';

export default function Root({
    store,
    history
}) {
    return ( 
    <Provider store = { store} > 
      <div>
        <ConnectedRouter history = { history } >
          < Route path = "/" component = { App }/> 
        </ConnectedRouter> 
      </div> 
    </Provider>
  );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};