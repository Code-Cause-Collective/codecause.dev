import { html, LitElement, css, type TemplateResult, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import logo from '../../assets/img/code-cause-logo.png';

@customElement('app-header')
export class HeaderComponent extends LitElement {
  @state()
  private _isPageNotFoundInView: boolean = false;

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('is-page-not-found', this.onPageNotFoundView);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('is-page-not-found', this.onPageNotFoundView);
  }

  render(): TemplateResult {
    return html`${!this._isPageNotFoundInView
      ? html`<header>
          <nav>
            <div class="nav-logo">
              <img class="logo" src=${logo} alt="code-cause-logo-img" />
              <a href="/"
                ><p class="app-title" aria-current="page">Code Cause</p></a
              >
            </div>

            <div class="nav-links">
              <a href="/about">About</a>
              <a href="/projects">Projects</a>
            </div>
          </nav>
        </header>`
      : nothing}`;
  }

  /**
   * Handle `is-page-not-found` event - get value true/false if page not found view is showing to show/hide header
   * @param event
   */
  private onPageNotFoundView = (event: Event): void => {
    if (event instanceof CustomEvent) {
      if (event.detail !== this._isPageNotFoundInView) {
        this._isPageNotFoundInView = event.detail;
      }
    }
  };

  static styles = css`
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .nav-logo a {
      text-decoration: none;
      color: var(--primary-text-color);
    }

    .logo {
      height: 1.8rem;
      width: auto;
      align-items: center;
      margin-right: 0.25rem;
    }

    .app-title {
      font-size: 1.125rem;
      font-weight: 500;
    }

    .nav-links {
      display: flex;
      gap: 1.5rem;
    }

    .nav-links a {
      text-decoration: none;
      color: var(--text);
      font-weight: 500;
    }

    a:hover {
      color: #4b7ce6;
    }

    @media only screen and (max-width: 640px) {
      .logo {
        height: 1.65rem;
      }

      .app-title {
        font-size: 0.95rem;
      }

      .nav-links a {
        font-size: 0.95rem;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': HeaderComponent;
  }
}
