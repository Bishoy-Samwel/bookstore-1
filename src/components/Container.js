import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Navbar from './NavBar';
import Categories from './Categories';
import Books from './Books';
import AddBookForm from './AddBookForm';

const Container = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Books />
        <AddBookForm />
      </Route>
      <Route path="/books">
        <Books />
        <AddBookForm />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>
  </>
);

export default Container;
