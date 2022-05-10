export function getStorage() {
  return JSON.parse(window.localStorage.getItem('scoreData') || '[]');
}
export function setStorage(scores) {
  window.localStorage.setItem('scoreData', JSON.stringify(scores));
}