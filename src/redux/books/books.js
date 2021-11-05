/* eslint-disable camelcase */
import axios from 'axios';

// Actions Types
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOAD_BOOKS_IN_PROGRESS = 'LOAD_BOOKS_IN_PROGRESS';
const LOAD_BOOKS_SUCCESS = 'LOAD_BOOKS_SUCCESS';
const LOAD_BOOKS_FAILURE = 'LOAD_BOOKS_FAILURE';

// Reducers
const initialState = [];
export const booksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter(book => book.item_id !== payload);
    case LOAD_BOOKS_SUCCESS: {
      const { books } = payload;
      return books;
    }
    default:
      return state;
  }
};

export const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_BOOKS_IN_PROGRESS:
      return true;
    case LOAD_BOOKS_SUCCESS:
      return false;
    case LOAD_BOOKS_FAILURE:
      return false;
    default:
      return state;
  }
};

// Action Creators
const addBook = payload => ({
  type: ADD_BOOK,
  payload,
});
const removeBook = payload => ({
  type: REMOVE_BOOK,
  payload,
});

export const loadBooksInProgress = () => ({
  type: LOAD_BOOKS_IN_PROGRESS,
});

export const loadBooksSuccess = books => ({
  type: LOAD_BOOKS_SUCCESS,
  payload: { books },
});

export const loadBooksFailure = () => ({
  type: LOAD_BOOKS_FAILURE,
});

// side effects, only as applicable
// e.g. thunks, epics, etc
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appId = 'RBNrAr3PCfuwfDwCo1lD';

export const displayAlert = text => () => {
  alert(`${text}`);
};

const extractBooks = obj => {
  const result = [];
  Object.entries(obj).forEach(dataItem => {
    const obj = {
      item_id: dataItem[0],
      title: dataItem[1][0].title,
      category: dataItem[1][0].category,
    };
    result.push(obj);
  });
  return result;
};

export const loadBooks = () => async dispatch => {
  try {
    dispatch(loadBooksInProgress()); // The loading is in progress in this moment
    const response = await axios.get(`${baseUrl}${appId}/books`);
    const books = await extractBooks(response.data); // Convert the data to array of books
    dispatch(loadBooksSuccess(books)); // The loading is succedded in this moment
  } catch (e) {
    dispatch(loadBooksFailure()); // The loading failed in this moment
    dispatch(displayAlert(e)); // Show the error
  }
};

export const addBookRequest = book => (
  async dispatch => {
    try {
      const body = JSON.stringify(book);
      await fetch(`${baseUrl}${appId}/books`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'post',
        body,
      });
      dispatch(addBook(book));
    } catch (error) {
      dispatch(displayAlert(error));
    }
  }
);

export const removeBookRequest = item_id => (
  async dispatch => {
    try {
      axios.delete(`${baseUrl}${appId}/books/${item_id}`, { item_id });
      dispatch(removeBook(item_id));
    } catch (error) {
      dispatch(displayAlert(error));
    }
  }
);
