import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { booksReducer, isLoading } from './books/books';

const reducer = combineReducers({
  books: booksReducer,
  isLoading,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;
