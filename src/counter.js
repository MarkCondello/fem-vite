import './style.css';
import { counter, counterColor } from './counter.module.css'; // css modules only load when required
import './postcss.css';

export const initializeCounter = (doc = globalThis.document) => {
  const countElement = doc.getElementById('count');
  const incrementButton = doc.getElementById('increment');
  const decrementButton = doc.getElementById('decrement');

  countElement.classList.add(counter, counterColor);
  let count = 0;

  const render = () => {
    countElement.textContent = count;
  };

  const increment = () => {
    count++;
    render();
    if (count > 5) {
      import('./banner.js').then(({ banner }) => {
        banner('You have clicked the increment button too many times!');
      });
    } else {
      import('./banner.js').then(({ banner }) => {
        banner();
      });
    }
  };

  const decrement = () => {
    count--;
    render();
    if (count < 0) {
      import('./banner.js').then(({ banner }) => {
        banner('You have clicked the decrement button too many times!');
      });
    } else {
      import('./banner.js').then(({ banner }) => {
        banner();
      });
    }
  };

  incrementButton.addEventListener('click', increment);
  decrementButton.addEventListener('click', decrement);

  render();

  return () => {
    incrementButton.removeEventListener('click', increment);
    decrementButton.removeEventListener('click', decrement);
  };
};
