import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../../components/List/List.component';
import * as actions from '../../actions/index.js'

@connect(
  ({ users }) => ({ users })
)
class UserList extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        const { users } = this.props;
        return (
          <div className="UserList">
            <List items={ users }></List>
          </div>
        );
    }
};

UserList.propTypes = {
    users: PropTypes.array
};

export default UserList;