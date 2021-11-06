import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Navbar from './Navbar';
import Categories from './Categories';
import Books from './Books';
import AddBookForm from './AddBookForm';
import './Container.css';

const Container = () => (
  <div className="panel-bg">
    <Navbar />
    <Switch>
      <Route exact path="/">
        <div className="sub-container">
          <Books />
          <AddBookForm />
        </div>
      </Route>
      <Route path="/books">
        <div className="sub-container">
          <Books />
          <AddBookForm />
        </div>
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>
  </div>
);

export default Container;
