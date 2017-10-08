import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
// import { home } from './Home.component.scss';

const Home = ({ list }) => {
    return (
        <div>
          {
            list.map((item, index) => <div key={ index }>{item}</div>)
          }
        </div>
    );
};

Home.propTypes = {
    user: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        list: state.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);