import addList from './modules/AddList.js';
import displayList from './modules/DisplayList.js';
import ScoreCL from './modules/ScoreClass';
import './style.css';

const submitBtn = document.querySelector('#submit');
const nameInput = document.querySelector('#nameInput');
const scoreInput = document.querySelector('#scoreInput');
const notice = document.querySelector('.notice');

displayList();

// click event for the add button
submitBtn.addEventListener('click', () => {
  if (nameInput === '' || scoreInput.value === '') {
    notice.classList.remove('hidden');
  } else {
    const user = nameInput.value;
    const score = scoreInput.value;
    const scoreClass = new ScoreCL(user, score);
    console.log(addList(scoreClass));
    displayList();
    nameInput.value = '';
    scoreInput.value = '';
  }
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