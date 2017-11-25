import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../../components/List/List.component';
import * as actions from '../../actions/index.js'

@connect(
  ({ companies }) => ({ companies })
)
class CompaniesList extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        const { companies } = this.props;
        return (
          <div className="CompaniesList">
            <List items={ companies }></List>
          </div>
        );
    }
};

CompaniesList.propTypes = {
    users: PropTypes.array
};

export default CompaniesList;