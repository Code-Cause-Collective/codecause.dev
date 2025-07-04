import { html, LitElement, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { headerComponentStyles } from './header-component-styles';
import logo from '../../assets/img/code-cause-logo.png';

@customElement('header-component')
export class HeaderComponent extends LitElement {
  static styles = headerComponentStyles;

  @property() src = logo;
  @property() alt = 'code-cause-logo-img';

  render(): TemplateResult<1> {
    return html`<header>
      <nav>
        <div class="nav-logo">
          <img class="logo" src=${this.src} alt=${this.alt} />
          <p class="app-title" aria-current="page">Code Cause</p>
        </div>

        <div class="nav-links">
          <a href="/about">About</a>
        </div>
      </nav>
    </header>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'header-component': HeaderComponent;
  }
}
