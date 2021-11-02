import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function Book(props) {
  const dispatch = useDispatch();
  const { book } = props;
  return (
    <li key={book.id}>
      {book.category}
      {book.name}
      {book.author}
      <button type="button">Comments</button>
      <button type="button" onClick={() => dispatch(removeBook(book.id))}>Remove</button>
      <button type="button">Edit</button>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape.isRequired,
};
