import React from 'react';
import './App.css';
import {  HashRouter as Router, Route} from "react-router-dom";

import MovieIndex from './components/MovieIndex';
import MovieDetails from './components/MovieDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={MovieIndex} />
      <Route path="/movies/:page" exact component={MovieIndex} />
      <Route path="/movie/:id" exact component={MovieDetails} />
    </Router>
  );
}

export default App;
