import React from 'react';

import css from './Button.module.css';

const Button = (props) => {
  // console.log('Button.js Running!');

  return (
    <button
      type={props.type || 'button'}
      className={`${css.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
