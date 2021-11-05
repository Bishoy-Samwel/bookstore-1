import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = props => {
  const dispatch = useDispatch();
  const { book } = props;
  return (
    <li>
      {book.category}
      {' '}
      {book.title}
      <button type="button">Comments</button>
      <button type="button" onClick={() => dispatch(removeBook(book.id))}>Remove</button>
      <button type="button">Edit</button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.isRequired,
};

export default Book;
