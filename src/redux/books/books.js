const initialState = [];
// Actions Types
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};
export default reducer;

// Action Creators
export const addBook = payload => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = payload => ({
  type: REMOVE_BOOK,
  payload,
});

// side effects, only as applicable
// e.g. thunks, epics, etc
export function effect() {
}
