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
    // <div className="headerAS">
    //   <div className="titleAS">
    //     Data Structures and Algorithms
    //   </div>
    //   <div className="home-iconAS" data-toggle="tooltip" title="Home Screen" onClick={props.homeClick}>
    //     <img src="HomeIcons/icons8-home-page-50.png" alt="home icon"></img>
    //   </div>
    // </div>
  )
};
