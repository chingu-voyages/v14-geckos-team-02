import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import HomePage from './views/pages/HomePage/HomePage';

import Quiz from './views/components/Quiz/Quiz';
import Header from './views/components/Header/Header';
import Footer from './views/components/Footer/Footer';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} /> 
            <Route exact path='/big-o' component={Quiz} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
