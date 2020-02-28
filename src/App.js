import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Book from './components/book/Book';
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
      <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/book" component={Book} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
