const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUpp/scores/';

export default async function addList(newData) {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      user: newData.user,
      score: newData.score,
    }),
  });
  const reply = await response.json();
  return reply.result;
}