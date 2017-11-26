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
      this.state = { formIsVisible: false };
    }

    toggleForm = () => {
      return this
        .setState({
          formIsVisible: !this.state.formIsVisible
        })
    } 

    render() {
        const { 
          props: { users },
          state: { formIsVisible },
          toggleForm 
        } = this;
        return (
          <div className="UserList">
            <List
              items={ users } 
              childrenAreShown = { formIsVisible }  
              toggleChildren={ toggleForm }
              >
              { formIsVisible ? <p>form</p>: '' }
            </List>
          </div>
        );
    }
};

UserList.propTypes = {
    users: PropTypes.array
};

export default UserList;