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
      return state.filter(book => book.id !== payload);
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
    case LOAD_BOOKS_FAILURE:
      return false;
    default:
      return state;
  }
};

// Action Creators
export const addBook = payload => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = payload => ({
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
export const effect = () => {
};
