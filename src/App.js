import React, { Component } from 'react';
import Home from './components/home';
import Header from './components/header';
import About from './components/about.js';
import Contact from './components/contact.js';

// Importing Styling Files
import './App.css';


// Routing Importing 
import {BrowserRouter as Router , Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">ReactJS Routing</h1>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">

        <Router>
          <div>
            <Header />

            <Route exact path="/" render={
              (props) => (
                <Home {...props} age={21} /> 
              )

            }/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />


          </div>


        </Router>


          </div>

        </div>


      </div>

    );
  }
}

export default App;
