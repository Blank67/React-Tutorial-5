import React, { useMemo } from 'react';
import css from './DemoList.module.css';

const DemoList = (props) => {
  const sortedList = useMemo(() => {
    console.log('DemoList.js function sortedList Running!');
    return props.items.sort((a,b) => (a-b));
  },[props.items]) 

  console.log('DemoList.js Running!');

  return (
    <div className={css.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);