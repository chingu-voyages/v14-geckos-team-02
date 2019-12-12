import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentScreen: 'Welcome',
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
      <div className="App"><h1>App Core</h1></div>
    );
  }
}

const WelcomeScreen = () => <h1>Welcome Screen</h1>;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
