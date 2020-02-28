import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './components/redux/store';

import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Book from './components/book/Book';
import ModalBook from './components/modal/Book';
import Login from './components/auth/Login';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/book" component={Book} />
          <Route path="/book-modal" component={ModalBook} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
      </Router>
    </Provider>
  );
}

export default App;
