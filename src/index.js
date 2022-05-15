import './style.css';
import addList from './modules/AddList.js';
import getList from './modules/GetList.js';
import ScoreCL from './modules/ScoreClass.js';

const submitBtn = document.querySelector('#submit');
const nameInput = document.querySelector('#nameInput');
const scoreInput = document.querySelector('#scoreInput');
const notice = document.querySelector('.notice');
const refresh = document.querySelector('#refresh');

getList();

// click event for the add button
submitBtn.addEventListener('click', () => {
  const name = nameInput.value;
  const score = scoreInput.value;
  refresh.classList.toggle('active');
  if (!name || !score) {
    notice.classList.remove('hidden');
  } else if (parseInt(score, 10) < 0 || parseInt(score, 10) > 100) {
    notice.textContent = 'Invalid input. Score points is between 0 - 100';
    notice.classList.remove('hidden');
  }
  else {
    const user = nameInput.value;
    const score = scoreInput.value;
    const scoreClass = new ScoreCL(user, score);
    addList(scoreClass);
    nameInput.value = '';
    scoreInput.value = '';
  }
});

refresh.addEventListener('click', () => {
  refresh.classList.toggle('active');
  getList();
});

// remove error message upon clicking on the form text field
document.onclick = (e) => {
  if (
    e.target.id === 'nameInput'
      || e.target.id === 'scoreInput'
  ) {
    notice.classList.add('hidden');
  }
};