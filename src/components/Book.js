import React from 'react';
import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookRequest } from '../redux/books/books';
import './Book.css';

const Book = props => {
  const dispatch = useDispatch();
  const { book } = props;
  return (
    <div className="book">
      <div>
        <p className="category">{book.category}</p>
        <p className="title">{book.title}</p>
        <p className="aName">Author name</p>
        <div className="buttons">
          <button className="button" type="button">Comments</button>
          <button className="button" type="button" onClick={() => dispatch(removeBookRequest(book.item_id))}>Remove</button>
          <button className="button" type="button">Edit</button>
        </div>
      </div>
      <div className="percentage">
        <CircularProgress variant="determinate" size="4.2rem" thickness="2.5" value={64} />
        <div className="percentage-details">
          <p className="progress-perc">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="details">
        <p className="details-p">Current Chapter</p>
        <p className="details-p">Chapter 2</p>
        <button id="progress-btn" type="button"> UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
};

export default Book;
