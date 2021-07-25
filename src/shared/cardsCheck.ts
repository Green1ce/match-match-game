import { RETURN } from './CONST';

let realStatus = false;

export function cardsCheck(status: boolean | number): boolean {
  if (status === true) {
    realStatus = status;
  } else if (status === false) {
    realStatus = false;
  } else if (RETURN) {
    return realStatus;
  }
  return realStatus;
}
