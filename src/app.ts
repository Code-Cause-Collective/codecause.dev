import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './routes';

import './components/header/header-component';
import './components/footer/footer-component';

@customElement('app-root')
export class AppRoot extends LitElement {
  @query('#outlet')
  private _outlet!: HTMLElement;

  firstUpdated(): void {
    const router = new Router(this._outlet);
    router.setRoutes(routes);
  }

  render(): TemplateResult<1> {
    return html`
      <header-component></header-component>
      <div id="outlet"></div>
      <footer-component></footer-component>
    `;
  }
}
