import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';


export default (props) => {
  return(
    <div>
      <nav>
          <Link to='/'>Data Structures and Algorithms</Link>
      </nav>
    </div>
  )
};
