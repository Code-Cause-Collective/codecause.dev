import { html, LitElement, css, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { APP_TITLE } from '../../utils/constants';
import { currentYear } from '../../utils/dateFunctions';
import linkedin from '../../assets/img/linkedin-icon.png';
import github from '../../assets/img/github-icon.png';

@customElement('app-footer')
export class FooterComponent extends LitElement {
  render(): TemplateResult {
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

  static styles = css`
    .footer-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 10vh;
      flex-wrap: wrap;
    }

    .footer-text {
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;
      color: #acacac;
      font-size: 1rem;
    }

    a {
      text-decoration: none;
      color: #4b7ce6;
    }

    a:hover {
      text-decoration: underline;
    }

    .github-icon {
      filter: brightness(0) invert(1);
      width: 24px;
      height: 24px;
    }

    .icon {
      width: 20px;
      height: 20px;
      display: block;
    }

    @media only screen and (max-width: 640px) {
      .footer-text {
        font-size: 0.7rem;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'app-footer': FooterComponent;
  }
}
