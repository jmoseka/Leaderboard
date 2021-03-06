const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Al4d7IVkemOTTVg2sjm6/scores/';

const addList = async (newData) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: newData.user,
      score: newData.score,
    }),
  });
  const reply = await response.json();
  return reply.result;
};
export default addList;