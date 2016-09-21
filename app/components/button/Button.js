import React from 'react';
import style from './button.css';

export default (props) => {
  return (
    <button className={style.root} onClick={props.onClick}>
      {props.caption}
    </button>
  );
};
