import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookRequest } from '../redux/books/books';

const emptyFields = () => {
  const fields = document.querySelectorAll('.add-form');
  fields.forEach(field => {
    // eslint-disable-next-line no-param-reassign
    field.value = '';
  });
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
    <form>
      <input className="add-form" onChange={onChange} type="text" name="title" placeholder="Title" />
      <input className="add-form" onChange={onChange} type="text" name="category" placeholder="Author" />
      <input type="button" value="Add" onClick={handleAddBook} />
    </form>
  );
};
export default AddBookForm;
