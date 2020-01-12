import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import HomePage from './views/pages/HomePage/HomePage';
import Header from './views/components/Header/Header';
import Footer from './views/components/Footer/Footer';
import QuizCollections from './views/pages/QuizCollections/QuizCollections' //for test
import QuizPage from './views/components/QuizPage/QuizPage'
 


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} /> 
            <Route exact path='/quiz-collections' component={QuizCollections} />
            <Route exact path='/quiz/:link' component={QuizPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
