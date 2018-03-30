import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import './App.css';

import Navbar from 'Components/Navbar/Navbar';
import Home from 'Pages/Home/Home';
import VisibleMovies from 'Containers/Movies/VisibleMovies';
import VisibleMovieDetails from 'Containers/Movies/VisibleMovieDetails';
import TvShows from 'Pages/TvShows/TvShows';
import VisibleTvShowDetails from 'Containers/Tv/VisibleTvShowDetails';

import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store} >
            <Router>
              <div>
                <Navbar Link={Link} />
                <Route exact path="/" component={Home} />
                <Route exact path="/movies" component={VisibleMovies} />
                <Route exact path='/tv' component={TvShows} />
                <Route path='/movies/:id' component={VisibleMovieDetails} />
                <Route path='/tv/:id' component={VisibleTvShowDetails} />
              </div>
            </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
