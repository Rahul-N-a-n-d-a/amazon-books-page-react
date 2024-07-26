import React from 'react';
import Header from '../Components/Header/Header';
import Booklist from '../Components/Content/Booklist';
import data from '../Assets/Data';

function Home() {
  return (
    <div>
        <Header/>
        <Booklist data = {data}/>
    </div>
  )
}

export default Home;