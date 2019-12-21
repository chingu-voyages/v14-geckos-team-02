import React from 'react';
import './App.css';
import Quiz from '../Quiz/Quiz';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentScreen: 'Results',
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
<<<<<<< HEAD
        <div class="headerAS">
          <div class="titleAS">
            Data Structures and Algorithms
          </div>
          <div class="home-iconAS" data-toggle="tooltip" title="Home Screen">
            <img src="HomeIcons/icons8-home-page-50.png" alt="home icon"></img>
          </div>
        </div>
        <AppCore currentScreen={this.state.currentScreen}/>
        <div class="footerAS">coded by Chingu Cohort 14 Gecko Team 2</div>
=======
        <AppCore currentScreen={this.state.currentScreen}/>
        <Quiz />
>>>>>>> 7a9c59ecffa431fd1d4ae0f3cc729454f5aecc10
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
const CardScreen = () => <h1>Card Screen</h1>;

export default App;
