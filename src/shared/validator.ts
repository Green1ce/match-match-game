import { CORRECT, INCORRECT } from './CONST';

export function validator(): boolean {
  let status = true;

  const fN = document.querySelector('.first-name') as HTMLInputElement; // fN = firstName - input ввода имени
  const sN = document.querySelector('.second-name') as HTMLInputElement; // sN = secondName - input ввода фамилии
  const email = document.querySelector('.email') as HTMLInputElement; // input ввода email

  const fNV = fN.value; // fNV = fNValue - введеное пользователем имя в input
  const sNV = sN.value; // sNV = sNValue - введеная пользователем фамилия в input
  const emailV = email.value; // emailV = evailValue - введенный пользователем email в input

  const forEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;

  fN.classList.remove(INCORRECT);
  fN.classList.remove(CORRECT);
  sN.classList.remove(INCORRECT);
  sN.classList.remove(CORRECT);
  email.classList.remove(INCORRECT);
  email.classList.remove(CORRECT);

  if (fNV.length < 1 || !(/\D{1}/i).exec(fNV) || (/[~!@#$%*()_—+=\\/\\|\\:;"`'<>,.?^]/i).exec(fNV)) {
    status = false;
    fN.classList.add(INCORRECT);
  } else {
    fN.classList.add(CORRECT);
  }

  if (sNV.length < 1 || !(/\D{1}/i).exec(sNV) || (/[~!@#$%*()_—+=\\/\\|\\:;"`'<>,.?^]/i).exec(sNV)) {
    status = false;
    sN.classList.add(INCORRECT);
  } else {
    sN.classList.add(CORRECT);
  }

  if (emailV.length < 1 || !forEmail.exec(emailV)) {
    status = false;
    email.classList.add(INCORRECT);
  } else {
    email.classList.add(CORRECT);
  }

  return status;
}
