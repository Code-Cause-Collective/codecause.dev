import { html, LitElement, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { footerComponentStyles } from './footer-component-styles';
import { APP_TITLE } from '../../utils/constants';
import { currentYear } from '../../utils/dateFunctions';
import linkedin from '../../assets/img/linkedin-icon.png';
import github from '../../assets/img/github-icon.png';

@customElement('footer-component')
export class FooterComponent extends LitElement {
  static styles = footerComponentStyles;

  render(): TemplateResult<1> {
    return html`<footer>
      <div class="footer-container">
        <div class="footer-text">
          <a
            href="https://www.linkedin.com/company/code-cause/"
            target="_blank"
          >
            <img class="icon" src=${linkedin} alt="linkedin-icon" />
          </a>
          •
          <a href="https://github.com/Code-Cause-Community" target="_blank">
            <img class="github-icon icon" src=${github} alt="github-icon" />
          </a>
          •
          <p>© ${currentYear()}</p>
          •
          <p><a href="/">${APP_TITLE}</a></p>
        </div>
      </div>
    </footer> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'footer-component': FooterComponent;
  }
}
