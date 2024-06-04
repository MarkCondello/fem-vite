import './sassy.scss';
import steveImage from './imgs/steve-after-a-workshop.jpg?h=400;800&format=webp';
import steveImageMeta from './imgs/steve-after-a-workshop.jpg?w=700&format=gif&as=meta:height;format';

console.log({ steveImage, steveImageMeta });
import('./counter.js').then(({ initializeCounter }) => {
  // Dynamic import will not load file until required
  initializeCounter();
});

// console.log('Hello, from index.js!')
// import { initializeCounter } from './counter.js'
// initializeCounter()
