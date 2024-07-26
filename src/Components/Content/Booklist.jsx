import React, { useEffect, useState } from 'react';
import './Booklist.css';

function Booklist(props) {
  const [value, setValue] = useState([]);

  useEffect(() => {
    setValue(props.data);
  }, []);

  function handleClick (data) {
    console.log('Title: ' + data.title);
    console.log('Author: ' + data.author);
  }

  return (
    <div className='book-container'>
      <h1>Bestsellers in Books</h1>
      <div className="booklist">
        {value.map(book => {
          return (
            <div key={book.id} className="book" onClick={() => handleClick(book)}>
              <p className="order">#{book.id}</p>
              <div className="img-container">
                <img src={book.img} alt="" />
              </div>
              <p className='title'>{book.title}</p>
              <p className='author'>{book.author}</p>
              <p className='price'>₹ {book.price}</p>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Booklist;
