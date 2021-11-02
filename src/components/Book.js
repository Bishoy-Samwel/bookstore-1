import React from 'react';
import PropTypes from 'prop-types';

export default function User(props) {
  const { book } = props;
  return (
    <li key={book.id}>
      {book.category}
      {book.name}
      {book.author}
      <button type="button">Comments</button>
      <button type="button">Remove</button>
      <button type="button">Edit</button>
    </li>
  );
}

User.propTypes = {
  book: PropTypes.shape.isRequired,
};
