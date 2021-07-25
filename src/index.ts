import { START_PAGE } from './shared/CONST';
import { router } from './shared/router';
import './styles.scss';

const iDb = window.indexedDB;
let database: IDBDatabase | null = null;
const openRequest = iDb.open('green1ce-JSFE2021Q1', 1);

openRequest.onupgradeneeded = () => {
  database = openRequest.result;
  const store = database.createObjectStore('myCollection', { keyPath: 'id', autoIncrement: true });
  store.createIndex('name', 'name');
  store.createIndex('email', 'email', { unique: true });
};

openRequest.onsuccess = () => {
  database = openRequest.result;
};

window.onload = () => {
  router(START_PAGE);
};
