import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Book from './Book';

const Books = () => {
  const books = useSelector(state => state.books, shallowEqual);
  return (
    <ul>
      {
        Array.isArray(books) ? books.map(book => <Book key={book.id} book={book} />) : 'No Books yet'
      }
    </ul>
  );
};

export default Books;
