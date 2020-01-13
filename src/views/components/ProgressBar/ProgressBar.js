import React from 'react';
import './ProgressBar.scss';

export default ({questionLevel}) => {
  let stringFunc = (i,n) => `progress-circle ${i <= n ? 'complete' : ''}`;
  return (
      <div className="progress-container">
        {[1,2,3,4,5,6,7,8,9,10].map(num =>
          (<div className="progress-box">
            <div className={stringFunc(num,questionLevel)}>
              {num}
            </div>
            <div className="progress-bridge">
        <div className="progress-line">
        </div>
      </div>
    </div>)
        )}
      </div>
  );
};
