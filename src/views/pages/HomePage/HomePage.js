import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.scss';


const HomePage = () => {
  return (
    <div className='welcome'>
      <h1>Welcome</h1>
      <Link to="/quiz-collections">About Quiz</Link>
    </div>
  );
};

export default HomePage;