import './sassy.scss';

import('./counter.js').then(({ initializeCounter }) => {
  // Dynamic import will not load file until required
  initializeCounter();
});

// console.log('Hello, from index.js!')
// import { initializeCounter } from './counter.js'
// initializeCounter()
