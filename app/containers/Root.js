import PropTypes from 'prop-types';
import React from 'react';
import {
    Router,
    Route,
    Switch,
    browserHistory
} from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import UserList from './UserList/UserList.component';
import CompanyList from './CompanyList/CompanyList.component';

const Root = ({
    history
}) => {
    return (
      <ConnectedRouter history = { history } >
        <Switch>
          < Route path = "/companies" component = { CompanyList }/> 
          < Route path = "/users" component = { UserList }/> 
        </Switch>
      </ConnectedRouter> 
  );
}

Root.propTypes = {
  history: PropTypes.object.isRequired
};

export default Root

