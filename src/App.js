import React, { useCallback, useMemo, useState } from 'react';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

import './App.css';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  },[]);

  console.log('App.js Running!');

  return (
    <div className="app">
      <DemoList title={listTitle} items={useMemo(() => ([5,3,1,10]),[])} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
