import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const emptyFields = () => {
  const fields = document.querySelectorAll('.add-form');
  fields.forEach(field => {
    // eslint-disable-next-line no-param-reassign
    field.value = '';
  });
};

const AddBookForm = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
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
      id: uuidv4(), // make sure it's unique
    };
    dispatch(addBook(newBook));
  };
  const handleAddBook = () => {
    if (book.title && book.author) {
      submitBookToStore(book);
      emptyFields();
    } else {
      alert('Please complete empty fields!!');
    }
  };
  return (
    <form>
      <input className="add-form" onChange={onChange} type="text" name="title" placeholder="Title" />
      <input className="add-form" onChange={onChange} type="text" name="author" placeholder="Author" />
      <input type="button" value="Add" onClick={handleAddBook} />
    </form>
  );
};
export default AddBookForm;
