import { CORRECT, INCORRECT } from './CONST';

export function clearForm(): void {
  const firstName = document.querySelector('.first-name') as HTMLInputElement;
  const secondName = document.querySelector('.second-name') as HTMLInputElement;
  const email = document.querySelector('.email') as HTMLInputElement;

  firstName.value = '';
  secondName.value = '';
  email.value = '';

  firstName.classList.remove(INCORRECT);
  firstName.classList.remove(CORRECT);
  secondName.classList.remove(INCORRECT);
  secondName.classList.remove(CORRECT);
  email.classList.remove(INCORRECT);
  email.classList.remove(CORRECT);
}
