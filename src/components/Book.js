import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookRequest } from '../redux/books/books';

const Book = props => {
  const dispatch = useDispatch();
  const { book } = props;
  return (
    <li>
      {book.category}
      {' '}
      {book.title}
      <button type="button">Comments</button>
      <button type="button" onClick={() => dispatch(removeBookRequest(book.item_id))}>Remove</button>
      <button type="button">Edit</button>
    </li>
  );
};

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
};

export default Book;
