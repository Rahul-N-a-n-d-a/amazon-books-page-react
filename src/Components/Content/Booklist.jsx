import React from 'react';
import './Booklist.css';

function Booklist() {
  return (
    <div className='book-container'>
      <h1>Bestsellers in Books</h1>
      <div className="booklist">
        <div className="book">
          <div className="img-container">
            <img src="" alt="" />
          </div>
          <p className='title'></p>
          <p className='author'></p>
        </div>
      </div>
    </div>
  )
}

export default Booklist;
