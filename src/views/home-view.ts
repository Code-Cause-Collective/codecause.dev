import { LitElement, html, css, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import discord from '../assets/img/discord-icon.png';
import person1 from '../assets/img/person-1.png';
import person2 from '../assets/img/person-2.png';
import person3 from '../assets/img/person-3.png';
import person4 from '../assets/img/person-4.png';

import '../components/three-js/globe-viewer/globe-viewer';

const PERSON_IMAGES: readonly {
  alt: string;
  path: string;
  id: string;
}[] = [
  { alt: 'person-1', path: person1, id: '1' },
  { alt: 'person-2', path: person2, id: '2' },
  { alt: 'person-3', path: person3, id: '3' },
  { alt: 'person-4', path: person4, id: '4' },
];

@customElement('home-view')
export class HomeView extends LitElement {
  connectedCallback(): void {
    super.connectedCallback();
    this.dispatchEvent(
      new CustomEvent('is-page-not-found', {
        detail: false,
        bubbles: true,
        composed: true,
      })
    );
  }

  render(): TemplateResult {
    return html`
      <div class="wrapper">
        <!-- Globe Viewer -->
        <globe-viewer></globe-viewer>
        <!-- Hero -->
        ${this.heroSectionTemplate()}
        <!-- Call to action -->
        ${this.callToActionSectionTemplate()}
      </div>
    `;
  }

  private heroSectionTemplate(): TemplateResult {
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

  private callToActionSectionTemplate(): TemplateResult {
    return html`<section id="cta-section">
      <div class="container">
        <div class="user-images">
          ${PERSON_IMAGES.map(
            (img) =>
              html`<img
                loading="lazy"
                width="200"
                height="200"
                src=${img.path}
                alt=${img.alt}
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
            href="https://discord.gg/HM5tZPhxg5"
            target="_blank"
            class="community-cta"
          >
            <img class="discord-icon" src="${discord}" alt="discord-icon" />
            Join Community
          </a>
        </div>
      </div>
    </section>`;
  }

  static styles = css`
    :host {
      width: 100%;
      height: 100%;
      display: block;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      width: 100%;
    }
    .container {
      display: flex;
      flex-direction: column;
      max-width: 66.666667%;
      margin: 0 auto;
    }

    h1 {
      font-weight: 700;
      font-size: 2rem;
    }

    p {
      color: #dddde1;
    }

    a {
      color: var(--white);
      text-decoration: none;
      padding: 0.5em;
      padding-right: 1em;
      padding-left: 1em;
      border-radius: 20px;
      border: 1px solid #2e2e2e;
    }

    .learn-more:hover {
      border: 1px solid #555555;
    }

    .learn-more {
      background-color: #212a39;
    }

    .cta-buttons {
      margin-top: 4rem;
    }

    #cta-section .container {
      margin-top: 150px;
    }

    .user-images {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .user-avatar {
      height: 2rem;
      width: 2rem;
      border-radius: 9999px;
      object-fit: cover;
    }

    .community-cta {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background-color: #5865f2;
    }

    .community-cta:hover {
      border: 1px solid #555555;
    }

    .discord-icon {
      filter: brightness(0) invert(1);
      width: 20px;
      height: 15px;
    }

    @media only screen and (max-width: 640px) {
      h1 {
        font-size: 2.75rem;
      }
      .container {
        max-width: 90%;
      }
    }

    @media (min-width: 1280px) {
      h1 {
        font-size: 4rem;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'home-view': HomeView;
  }
}
