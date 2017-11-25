import PropTypes from 'prop-types';
import React from 'react';
import './list.component.scss';

const List = ({ items }) => {
    return (
        <div className="List">
          {
            items.map((item, index) => <div className="List-item" key={ index }>{ item }</div>)
          }
        </div>
    );
};

List.propTypes = {
    li: PropTypes.array
};

export default List;
