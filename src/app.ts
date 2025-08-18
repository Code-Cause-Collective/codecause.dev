import { LitElement, html, css, type TemplateResult } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './routes';

import './components/header/header';
import './components/footer/footer';

@customElement('app-root')
export class AppRoot extends LitElement {
  @query('#outlet')
  private _outlet!: HTMLElement | null;

  firstUpdated(): void {
    const router = new Router(this._outlet);
    router.setRoutes(routes);
  }

  render(): TemplateResult {
    return html`
      <main>
        <app-header></app-header>
        <div id="outlet"></div>
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
