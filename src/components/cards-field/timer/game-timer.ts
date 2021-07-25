import './game-timer.scss';
import { BaseComponent } from '../../base-components';
import { router } from '../../../shared/router';
import {
  END,
  PLUS_A_MINUTE, NOT_FOUND, FACTOR, ONE_SECOND, RETURN, SHOW_TIME, SECONDS_IN_MINUTE, START, TEN, ZERO,
} from '../../../shared/CONST';
import { gameLevel } from '../../../shared/settings';

export class GameTimer extends BaseComponent {
  private i: number;

  private k: number;

  private timer: NodeJS.Timeout | null;

  constructor() {
    super('div', ['game-timer']);
    this.element.innerHTML = `
      <span class="timer-minits">00</span>
      <span>:</span>
      <span class="timer-seconds">00</span>
    `;
    this.i = 0;
    this.k = 0;
    this.timer = null;
  }

  gameTimer(status: string): void {
    const seconds = this.element.querySelector('.timer-seconds');
    if (!seconds) throw Error(NOT_FOUND);
    const minits = this.element.querySelector('.timer-minits');
    if (!minits) throw Error(NOT_FOUND);
    if (status === START) {
      setTimeout(() => {
        this.timer = setInterval(() => {
          if (this.i === PLUS_A_MINUTE) {
            this.i = -1;
            this.k += 1;
          }
          this.i++;
          if (this.i < TEN) seconds.textContent = `0${this.i}`;
          else if (this.i >= TEN) seconds.textContent = `${this.i}`;
          if (this.k < TEN) minits.textContent = `0${this.k}`;
          else if (this.k >= TEN) minits.textContent = `${this.k}`;
        }, ONE_SECOND);
      }, SHOW_TIME);
    } else if (status === END) {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  }

  result(): void {
    const gameResult = gameLevel(RETURN) * gameLevel(RETURN) * FACTOR - (this.k * SECONDS_IN_MINUTE + this.i) * TEN;
    if (gameResult > ZERO) {
      alert(`Твой результат ${gameResult}! Но не ищи его в таблице рекордов. Её просто нет :)`);
    } else {
      alert('Твой результат 0. Не расстраивайся, а попробуй еще раз ;)');
    }
    const hash = '#/Best-Score';
    window.location.hash = hash;
    router(hash);
  }

  gameStoped(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
    alert('Игра остановленна и результата не будет');
  }
}
