import React from 'react';
import css from './DemoList.module.css';

const DemoList = (props) => {
  console.log('DemoList.js Running!');

  return (
    <div className={css.list}>
      <h2>{props.title}</h2>
      <ul>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);