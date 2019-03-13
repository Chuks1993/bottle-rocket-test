import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../../assets/scss';
import Restaurants from '../pages/Restaurants';
import Map from '../pages/Map';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Route exact path="/" component={Restaurants} />
        <Route exact path="/map" component={Map} />
      </div>
    </Router>
    );
  }
}

export default App;
