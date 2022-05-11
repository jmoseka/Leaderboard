import getList from './GetList.js';

// eslint-disable-next-line class-methods-use-this
const displayList = () => {
  const scoreListContainer = document.querySelector('.score-list-container');
  scoreListContainer.innerHTML = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const scoreList of [...Object(getList())]) {
    const element = document.createElement('li');
    element.innerHTML = `
              ${scoreList.user} : ${scoreList.score}
              `;
    scoreListContainer.appendChild(element);
  }
};

export default displayList;