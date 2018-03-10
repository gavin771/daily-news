import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import Header from './Header';
import Footer from './Footer';

//containers that get data from redux state
import Home from '../containers/Home';
import News from '../containers/News';
import Gallery from '../containers/Gallery'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/news/:id" component={News}/>
            <Route exact path="/galleries/:id" component={Gallery} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
