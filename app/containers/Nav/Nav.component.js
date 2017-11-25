import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import * as actions from '../../actions/index.js'
require('./Nav.component.scss');

@connect(
  null,
  (dispatch) => ({
    pushAction: (route) => dispatch(push(route))
  })
)
class Nav extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        const { pushAction  } = this.props;
        return (
            <div className="Nav">
              <a className="Nav-link" onClick={() => pushAction('/users')}>users</a>
              <a className="Nav-link" onClick={() => pushAction('/companies')}>companies</a>
            </div>
        );
    }
};

export default Nav;