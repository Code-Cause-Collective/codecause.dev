import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

import './partials/landing-partial-view';

@customElement('home-view')
export class HomeView extends LitElement {
  landingPartialViewTemplate(): TemplateResult<1> {
    return html`<landing-partial-view></landing-partial-view>`;
  }

  render(): TemplateResult<1> {
    return html` ${this.landingPartialViewTemplate()} `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'home-view': HomeView;
  }
}
