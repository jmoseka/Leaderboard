import { getStorage } from './LocalStorage.js';

// eslint-disable-next-line class-methods-use-this
const displayList = () => {
  const scoreListContainer = document.querySelector('.score-list-container');
  scoreListContainer.innerHTML = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const scoreList of [...Object(getStorage())]) {
    const element = document.createElement('li');
    element.innerHTML = `
              ${scoreList.name} : ${scoreList.score}
              `;
    scoreListContainer.appendChild(element);
  }
};

export default displayList;