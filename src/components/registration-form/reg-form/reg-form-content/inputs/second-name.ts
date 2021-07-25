import { TextFields } from '../../../../textField';
import './inputs.scss';

export class SecondName extends TextFields {
  constructor() {
    super('input', ['second-name'], 'text', 'Second Name', '30');
  }
}
