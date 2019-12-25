import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './views/pages/HomePage/HomePage';

import Quiz from './views/components/Quiz/Quiz';
import Header from './views/components/Header/Header';
import Footer from './views/components/Footer/Footer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentScreen: 'CardScreen',
      cardsArray: [],
      currentCard: 0,
      level: 0,
      score: 0,
      category: '',
      answerStatus: false,
    };
    this.homeClick = this.homeClick.bind(this);
  }

  homeClick(){
    this.setState({currentScreen: 'Welcome'});
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} /> 
        </Switch>
        {/* <Header homeClick={this.homeClick}/>
        <AppCore currentScreen={this.state.currentScreen}/>
        <Footer/> */}
      </div>
    );
  }
}

function AppCore(props) {
  switch(props.currentScreen) {
    case 'Welcome': return <WelcomeScreen />
    case 'Results': return <ResultsScreen />
    default: return <CardScreen />
  }
}

const WelcomeScreen = () => <h1>Welcome Screen</h1>;
const ResultsScreen = () => <h1>Results Screen</h1>;
const CardScreen = () => <Quiz />;
/*
const Footer = () => <div class="footerAS">coded by Chingu Cohort 14 Gecko Team 2</div>;
*/
export default App;
