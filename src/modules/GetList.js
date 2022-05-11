async function getList() {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUpp/scores/';
  const response = await fetch(url);
  const reply = await response.json();
  const scoreListContainer = document.querySelector('.score-list-container');
  scoreListContainer.innerHTML = '';
  const sorted = reply.result.sort((a, b) => a.score - b.score);
  // eslint-disable-next-line no-restricted-syntax
  for (const scoreList of [...Object(sorted)]) {
    const element = document.createElement('li');
    element.innerHTML = `
              ${scoreList.user} : ${scoreList.score}
              `;
    scoreListContainer.appendChild(element);
  }
  return reply;
}

export default getList;