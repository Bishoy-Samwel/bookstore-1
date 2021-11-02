import React from 'react';
import Book from './Book';

export default function Books() {
  const book1 = {
    name: 'Democracy The God That Failed',
    category: 'Politics',
    author: 'Hans-Hermann Hoppe',
  };
  const books = [book1];
  return (
    <ul>
      {
        Array.isArray(books) ? books.map(book => <Book key={book.id} book={book} />) : 'No Books yet'
      }
    </ul>
  );
}
