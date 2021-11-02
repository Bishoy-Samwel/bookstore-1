import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Book from './Book';

export default function Books() {
  const books = useSelector(state => state.books, shallowEqual);
  return (
    <ul>
      {books.map(
        book => <Book key={book.id} book={book} />,
      )}
    </ul>
  );
}
