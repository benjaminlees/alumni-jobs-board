import PropTypes from 'prop-types';
import React from 'react';
import { list, listItem } from './list.component.scss';

const List = ({li}) => {
    return (
        <div className="list">
          {
            li.map((item, index) => <div className="list_item" key={ index }>{ item }</div>)
          }
        </div>
    );
};

List.propTypes = {
    li: PropTypes.array
};

export default List;
