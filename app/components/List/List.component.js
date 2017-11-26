import PropTypes from 'prop-types';
import React from 'react';
import AddButton from '../AddButton/AddButton.component';
import './list.component.scss';

const List = ({ items, toggleChildren, children, childrenAreShown }) => {
    return (
        <div className="List">
          {
            items.map((item, index) => <div className="List-item" key={ index }>{ item }</div>)
          }
          { children ? {...children} : ''}
          { 
              toggleChildren ? 
              <AddButton position="right" isAdd={!childrenAreShown} onClick={ () => toggleChildren()}/> : 
              '' 
           }
        </div>
    );
};

List.propTypes = {
    items: PropTypes.array,
    toggleChildren: PropTypes.func,
    children: PropTypes.node,
    childrenAreShown: PropTypes.bool
};

export default List;
