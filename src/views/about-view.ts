import { LitElement, html, css, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('about-view')
export class AboutView extends LitElement {
  static styles = css`
    main {
      width: 100%;
      max-width: 768px;
      margin-left: auto;
      margin-right: auto;
    }

    h3 {
      font-weight: 700;
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }

    h3.title {
      font-size: 1.875rem;
      font-weight: 700;
    }

    h3.sub-title {
      font-size: 1.25rem;
      font-weight: 700;
      margin-top: 1.25rem;
      margin-bottom: 1.5rem;
    }

    p {
      color: #e5e7eb;
      margin: 0;
    }

    hr {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      border-top-width: 1px;
      border-color: #374151;
      border-style: solid;
    }
  `;

  render(): TemplateResult<1> {
    return html`<main>
      <h3 class="title">About Us</h3>
      <div>
        <p>
          Welcome to Code Cause, a global, tech driven community fueled by
          purpose and powered by the will to see positive and meaningful change
          in the world. At Code Cause, we believe in the power of collaboration
          to transform ideas into real-world solutions for the greater good of
          humanity. We encourage everyone to dream, build, work, and create with
          purpose - always with the intention to make a positive impact on
          others and the world.
        </p>
      </div>

      <hr />

      <h3 class="sub-title">Our Purpose</h3>
      <div>
        <p>
          Our purpose is to tackle global challenges - big and small - ranging
          from efficiency and waste management to climate change, health crises,
          and beyond. Together, we are stronger - combining our unique
          perspectives, ideas, and skills to tackle the world’s toughest
          problems. All for good, all for change.
        </p>
      </div>

      <hr />

      <h3 class="sub-title">Our Mission & Goal</h3>
      <div>
        <p>
          Our mission is to inspire change and lead with proactive action by
          creating an inclusive, supportive space where individuals from all
          walks of life come together with a common goal: to build a better
          world for the greater good of humanity and all walks of life through
          code.
        </p>
      </div>

      <hr />
    </main> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'about-view': AboutView;
  }
}
