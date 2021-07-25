import { EASY, RETURN, ZERO } from './CONST';

let level = EASY;

export function gameLevel(numb: number): number {
  if (numb === RETURN) level += ZERO;
  else level = numb;
  return level;
}
