import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import List from '../../components/List/List.component';
import { home, homeButtonContainer } from './Home.component.scss';
import * as actions from '../../actions/index.js'

const Home = ({ users, companies, shownList, switchList }) => {
    return (
        <div className="home">
            <div className="home_buttonContainer">
                <button className="home_button" onClick={() => switchList('USER')}>users</button>
                <button className="home_button" onClick={() => switchList('COMPANY')}>companies</button>
            </div>
            { shownList === "USER" ? <List li={users} /> : ''}
            { shownList === "COMPANY" ? <List li={companies} /> : ''}
        </div>
    );
};

Home.propTypes = {
    users: PropTypes.array,
    companies: PropTypes.array,
    shownList: PropTypes.string
};

const mapStateToProps = ({ users, companies, homeState }) => {
    return {
        users,
        companies,
        shownList: homeState.shownList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        switchList: list => dispatch(actions.switchList(list))
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);