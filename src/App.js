import React, { useCallback, useState } from 'react';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

import './App.css';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [buttonName, setButonName] = useState('Change to Descending Order');
  const [list,setList] = useState([5,3,1,10]);
  const [asc, setAsc] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New List');
  },[]);

  const changeOrderHandler = useCallback(() => {
    if(asc){
      setAsc(false);
      setListTitle('Sorted List');
      setButonName('Change to Descending Order');
      setList(list.sort((a,b) => (a-b)))
    }else{
      setAsc(true);
      setButonName('Change to Ascending Order');
      setList(list.sort((a,b) => (b-a)))
    }
  },[asc,list])

  // console.log('App.js Running!');

  return (
    <div className="app">
      <DemoList title={listTitle} items={list} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <br /><br />
      <Button onClick={changeOrderHandler}>{buttonName}</Button>
    </div>
  );
}

export default App;