import React,{useState} from 'react';

export default (props) => {
  return(
    <div class="headerAS">
      <div class="titleAS">
        Data Structures and Algorithms
      </div>
      <div class="home-iconAS" data-toggle="tooltip" title="Home Screen" onClick={props.homeClick}>
        <img src="HomeIcons/icons8-home-page-50.png" alt="home icon"></img>
      </div>
    </div>
  )
};
