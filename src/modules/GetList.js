const getList = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUpa/scores/';
  const response = await fetch(url);
  const reply = await response.json();
  const scoreListContainer = document.querySelector('.score-list-container');
  scoreListContainer.innerHTML = '';
  const sorted = reply.result.sort((a, b) => a.score - b.score);

  sorted.forEach((scoreList) => {
    const element = document.createElement('li');
    element.innerHTML = `
              ${scoreList.user} : ${scoreList.score}
              `;
    scoreListContainer.appendChild(element);
  });
  return reply;
};

export default getList;