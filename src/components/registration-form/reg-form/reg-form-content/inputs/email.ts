import { TextFields } from '../../../../textField';
import './inputs.scss';

export class Email extends TextFields {
  constructor() {
    super('input', ['email'], 'email', 'E-mail', '30');
  }
}
