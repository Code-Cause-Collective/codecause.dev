import { html, LitElement, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../components/three-js/globe-viewer/globe-viewer';
import { landingPartialViewStyles } from './landing-partial-view-styles';
import person1 from '../../assets/img/person-1.png';
import person2 from '../../assets/img/person-2.png';
import person3 from '../../assets/img/person-3.png';
import person4 from '../../assets/img/person-4.png';

@customElement('landing-partial-view')
export class LandingPartialView extends LitElement {
  static styles = landingPartialViewStyles;

  private _personImages = [
    { alt: 'person-1', path: person1, id: '1' },
    { alt: 'person-2', path: person2, id: '2' },
    { alt: 'person-3', path: person3, id: '3' },
    { alt: 'person-4', path: person4, id: '4' },
  ];

  threeGlobeViewerTemplate(): TemplateResult<1> {
    return html` <globe-viewer></globe-viewer> `;
  }

  heroSectionTemplate(): TemplateResult<1> {
    return html`<section id="hero-section">
      <div class="container">
        <h1>Building a Better World Through Code</h1>
        <p>
          Uniting developers to build a future driven by purpose, innovation,
          and good faith. Bridging imagination with action to shape a better
          tomorrow through technology.
        </p>
        <div class="cta-buttons">
          <a href="/about" class="learn-more">Learn more</a>
        </div>
      </div>
    </section>`;
  }

  callToActionSectionTemplate(): TemplateResult<1> {
    return html`<section id="cta-section">
      <div class="container">
        <div class="user-images">
          ${this._personImages.map(
            (personImg) =>
              html`<img
                loading="lazy"
                width="200"
                height="200"
                src=${personImg.path}
                alt=${personImg.alt}
                class="user-avatar"
              />`
          )}
        </div>
        <div>
          <h1>Join Today</h1>
          <p>
            Join a global, tech-driven community of developers, united in
            creating solutions that serve the greater good of humanity.
          </p>
        </div>
        <div class="cta-buttons">
          <a
            href="https://join.slack.com/t/codecause/shared_invite/zt-38cobkbtz-u5kTq1cmKPZN9d5fpkZhkQ"
            target="_blank"
            class="community-cta"
          >
            Join Community</a
          >
        </div>
      </div>
    </section>`;
  }

  render(): TemplateResult<1> {
    return html`
      <div class="wrapper">
        ${this.threeGlobeViewerTemplate()} ${this.heroSectionTemplate()}
        ${this.callToActionSectionTemplate()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'landing-partial-view': LandingPartialView;
  }
}
