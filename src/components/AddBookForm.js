/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookRequest } from '../redux/books/books';
import './AddBookForm.css';

const emptyFields = () => {
  const fields = document.querySelectorAll('.add-form');
  fields.forEach(field => {
    // eslint-disable-next-line no-param-reassign
    field.value = '';
  });
  document.querySelectorAll('#category-input')[0].value = '';
};

const AddBookForm = () => {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    category: '',
  });
  const onChange = e => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  const submitBookToStore = book => {
    const newBook = {
      ...book,
      item_id: uuidv4(), // make sure it's unique
    };
    dispatch(addBookRequest(newBook));
  };
  const handleAddBook = () => {
    if (book.title && book.category) {
      submitBookToStore(book);
      emptyFields();
    } else {
      alert('Please complete empty fields!!');
    }
  };
  return (
    <div className="form">
      <p id="form-title"> ADD NEW BOOK </p>
      <form>
        <input id="title-input" className="add-form" onChange={onChange} type="text" name="title" placeholder="Book Title" />
        <input id="category-input" type="text" list="categories" name="category" placeholder="Category" onChange={onChange} />
        <datalist id="categories">
          <option value="Science" />
          <option value="Politics" />
          <option value="Philosophy" />
          <option value="History" />
        </datalist>
        <input id="add-book-btn" type="button" value="ADD BOOk" onClick={handleAddBook} />
      </form>
    </div>
  );
};
export default AddBookForm;
