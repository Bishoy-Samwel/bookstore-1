import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { loadBooks } from '../redux/books/books';
import Book from './Book';
import './Books.css';

const Books = () => {
  const books = useSelector(state => state.books, shallowEqual);
  const isLoading = useSelector(state => state.isLoading, shallowEqual);
  const dispatch = useDispatch();
  useEffect(
    () => { dispatch(loadBooks()); }, [],
  );
  const loadingMessage = <div> Loading books...</div>;
  const content = books => (books.map(book => <Book key={book.item_id} book={book} />));

  if (!isLoading) {
    return (
      <div className="books">
        {content(books)}
      </div>
    );
  }
  return loadingMessage;
};

export default Books;
