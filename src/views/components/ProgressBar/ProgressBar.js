import React from 'react';
import 'ProgressBar.scss';

export default () => {
  return (
    <div class="container">
      <div class="progress-bar ext-10">
        <span data-step="1" class="progress-dot complete"></span>
        <span data-step="2" class="progress-dot complete"></span>
        <span data-step="3" class="progress-dot complete"></span>
        <span data-step="4" class="progress-dot complete"></span>
        <span data-step="5" class="progress-dot"></span>
        <span data-step="6" class="progress-dot"></span>
        <span data-step="7" class="progress-dot"></span>
        <span data-step="8" class="progress-dot"></span>
        <span data-step="9" class="progress-dot"></span>
        <span data-step="10" class="progress-dot"></span>
      </div>
    </div>
  );
};
