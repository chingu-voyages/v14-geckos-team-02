import React from 'react';


export default (props) => {
  return(
    <div className="headerAS">
      <div className="titleAS">
       Data Structures and Algorithms 
        
      </div>
      <div className="home-iconAS" data-toggle="tooltip" title="Home Screen" onClick={props.homeClick}>
        <img src="HomeIcons/icons8-home-page-50.png" alt="home icon"></img>
      </div>
    </div>
  )
};
