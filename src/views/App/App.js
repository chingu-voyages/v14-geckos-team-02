import React from 'react';
import './App.css';
import Quiz from '../Quiz/Quiz';
import Header from '../Header/Header';

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
  }

  render(){
    return (
      <div className="App">
        <Header />
        <AppCore currentScreen={this.state.currentScreen}/>
        <Footer/>
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
const Footer = () => <div class="footerAS">coded by Chingu Cohort 14 Gecko Team 2</div>;

export default App;
