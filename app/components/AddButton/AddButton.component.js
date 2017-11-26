import PropTypes from 'prop-types';
import React from 'react';
import './AddButton.component.scss';

const AddButton = ({ isAdd, onClick, position = '' }) => {
    return (
      <button 
        onClick = { onClick }
        className={
          `AddButton 
           AddButton--${isAdd ? 'add' : 'minus'}
           AddButton--${position}`
        }>
      </button>
    );
};

AddButton.propTypes = {
    isAdd: PropTypes.bool,
    position: PropTypes.oneOf(['right', 'left', ''])
};

export default AddButton;
