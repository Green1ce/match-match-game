export class TextFields {
  readonly element: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'input', styles: string[] = [], t: string, h: string, ml: string) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
    this.element.setAttribute('type', `${t}`);
    this.element.setAttribute('placeholder', `${h}`);
    this.element.setAttribute('maxlength', `${ml}`);
  }
}
