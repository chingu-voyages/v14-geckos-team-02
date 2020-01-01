import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.scss';


const HomePage = () => {
  return (
    <div>
    <nav>
        <Link to="/quizCollections">Data Structures and Algorithms</Link>  {/* for test*/}
        {/* <a href='/'>Data Structures and Algorithms</a> */}
    </nav>
    <div className='welcome'>
      <h1>Welcome</h1>
      <Link to="/big-o">About Quiz</Link>
    </div>
    </div>
  );
};

export default HomePage;