import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './views/pages/HomePage/HomePage';
import Header from './views/components/Header/Header';
import QuizCollections from './views/pages/QuizCollections/QuizCollections'; //for test
import QuizPage from './views/pages/QuizPage/QuizPage';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/quiz-collections' component={QuizCollections} />
            <Route path='/quiz/:id' component={QuizPage} />
            <Route
              render={() => (
                <div className='not-found'>
                  <h1>404</h1>
                  <p>Not found</p>
                </div>
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
