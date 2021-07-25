import { AppAbout } from '../app-about';
import { AppGame } from '../app-game';
import { AppScore } from '../app-score';
import { AppSettings } from '../app-settings';
import { AppStop } from '../app-stop';
import {
  ABOUT_GAME, BEST_SCORE, GAME, GAME_SETTINGS, GAME_STOP, NOT_FOUND, START_PAGE,
} from './CONST';

export function router(hash: string): void {
  const appElement = document.getElementById('app');
  if (!appElement) throw Error(NOT_FOUND);
  window.location.hash = hash;
  appElement.innerHTML = '';

  if (hash === START_PAGE) {
    new AppAbout(appElement);
  } else if (hash === ABOUT_GAME) {
    new AppAbout(appElement);
  } else if (hash === BEST_SCORE) {
    new AppScore(appElement);
  } else if (hash === GAME_SETTINGS) {
    new AppSettings(appElement);
  } else if (hash === GAME) {
    new AppGame(appElement).start();
  } else if (hash === GAME_STOP) {
    new AppStop(appElement);
  }
}
