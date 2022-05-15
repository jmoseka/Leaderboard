const getList = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Al4d7IVkemOTTVg2sjm6/scores/';
  const response = await fetch(url);
  const reply = await response.json();
  const scoreListContainer = document.querySelector('.score-list-container');
  scoreListContainer.innerHTML = '';
  const sorted = reply.result.sort((a, b) => a.score - b.score);

  sorted.forEach((scoreList) => {
    const element = document.createElement('li');
    element.classList = 'list-item';
    element.classList = 'space-between';
    element.innerHTML = `
              <span>${scoreList.user}</span> 
              <span class="score-text space-between">${scoreList.score}
              <i class="fa-solid fa-gem gem"></i>
              </span>
              `;
    scoreListContainer.appendChild(element);
  });
  return reply;
};

export default getList;