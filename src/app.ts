import { LitElement, html, css, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { routes } from './routes';

import './components/header/header';
import './components/footer/footer';
import { Router } from '@lit-labs/router';

@customElement('app-root')
export class AppRoot extends LitElement {
  private _router = new Router(this, routes);

  render(): TemplateResult {
    return html`
      <main>
        <app-header></app-header>
        <div id="outlet">${this._router.outlet()}</div>
        <app-footer></app-footer>
      </main>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    main {
      width: min(95ch, 100% - 4rem);
      margin-inline: auto;
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    #outlet {
      flex: 1;
      display: flex;
    }
  `;
}
