import { getStorage, setStorage } from './LocalStorage.js';

export default function addList(add) {
  const list = getStorage();
  list.push(add);
  setStorage(list);
}