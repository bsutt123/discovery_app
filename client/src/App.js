import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import './App.css';

import Navbar from 'Components/Navbar/Navbar';
import Home from 'Pages/Home/Home';
import VisibleMovies from 'Containers/VisibleMovies/VisibleMovies';
import TvShows from 'Pages/TvShows/TvShows';

import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store} >
          <div>
            <Navbar />
            <Router>
              <div>
                <Route exact path="/" component={Home} />
                <Route path="/movies" component={VisibleMovies} />
              </div>
            </Router>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
