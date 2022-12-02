import React, { useCallback, useState } from 'react';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';
import './App.css';

function App() {
  console.log('App.js');
  const [listTitle, setListTitle] = useState('My List');
  const [buttonName, setButtonName] = useState('Change to Descending Order');
  const [list, setList] = useState([5, 3, 1, 10]);
  const [asc, setAsc] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New List');
  }, []);

  const changeOrderHandler = useCallback(() => {
    if (asc) {
      setListTitle('Asc List');
      setButtonName('Change to Descending Order');
      setList(list.sort((a, b) => a - b));
      setAsc(false);
    } else {
      setListTitle('Dec List');
      setButtonName('Change to Ascending Order');
      setList(list.sort((a, b) => b - a));
      setAsc(true);
    }
  }, [asc, list]);

  return (
    <div className='app'>
      <DemoList title={listTitle} items={list} />
      <Button data='title button' onClick={changeTitleHandler}>
        Change List Title
      </Button>
      <br />
      <br />
      <Button data='sort button' onClick={changeOrderHandler}>
        {buttonName}
      </Button>
    </div>
  );
}

export default App;