import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../../components/List/List.component';
require('./Home.component.scss');
import * as actions from '../../actions/index.js'

@connect(
  ({ users, companies, homeState }) => {
    return {
        users,
        companies,
        shownList: homeState.shownList
    };
  },
  (dispatch) => {
    return {
        switchList: list => dispatch(actions.switchList(list))
    }
  }
)
class Home extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        const { shownList, switchList, companies } = this.props;
        return (
            <div className="Home">
                <div className="Home-buttonContainer">
                    <button className="Home-button" onClick={() => switchList('USER')}>users</button>
                    <button className="Home-button" onClick={() => switchList('COMPANY')}>companies</button>
                </div>
                { shownList === "USER" ? <List li={users} /> : ''}
                { shownList === "COMPANY" ? <List li={companies} /> : ''}
            </div>
        );
    }
};

Home.propTypes = {
    users: PropTypes.array,
    companies: PropTypes.array,
    shownList: PropTypes.string
};

export default Home;