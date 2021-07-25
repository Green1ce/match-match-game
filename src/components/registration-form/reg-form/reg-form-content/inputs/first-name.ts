import { TextFields } from '../../../../textField';
import './inputs.scss';

export class FirstName extends TextFields {
  constructor() {
    super('input', ['first-name'], 'text', 'First Name', '30');
  }
}
