import { Task } from '@lit/task';
import { LitElement, css, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GITHUB_API_BASE_URL, GITHUB_USERNAME } from '../utils/constants';
import '../shared/loading-indicator';

// Types
type Repo = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string;
  stargazers_count: number;
};

@customElement('projects-view')
export class ProjectsView extends LitElement {
  connectedCallback(): void {
    super.connectedCallback();
    this._githubReposTask.run();
  }

  private _githubReposTask = new Task(this, {
    task: async (_args, { signal }): Promise<Repo[]> => {
      return await fetch(
        `${GITHUB_API_BASE_URL}users/${GITHUB_USERNAME}/repos`,
        { signal }
      )
        .then((response) => response.json())
        .then((data: Repo[]) => {
          if (!data || !Array.isArray(data)) {
            throw Error();
          }
          return data.filter((repo: Repo) => repo.name !== '.github');
        });
    },
  });

  render(): TemplateResult {
    return html` ${this._githubReposTask.render({
      pending: () => html`<loading-indicator></loading-indicator>`,
      complete: (repos) => html`
        <div class="container">
          <div class="title">
            <h1>Projects</h1>
            <p>A curated list of our open source repositories</p>
          </div>
          <ul class="repo-list">
            ${repos.map((repo) => {
              return html` <li class="repo-card">
                <div class="repo-stars">⭐ ${repo.stargazers_count}</div>
                <a href="${repo.html_url}" target="_blank" class="repo-link">
                  ${repo.name}
                </a>
                <p class="repo-description">${repo.description}</p>
              </li>`;
            })}
          </ul>
        </div>
      `,
      error: () => html`
        <div class="error">
          Unable to display projects. Please try again later.
        </div>
      `,
    })}`;
  }

  static styles = css`
    :host {
      width: 100%;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      box-sizing: border-box;
    }

    .title {
      text-align: center;
    }

    .repo-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
      width: 100%;
    }

    .repo-card {
      position: relative;
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
    }

    .repo-card:hover {
      transform: translateY(-3px);
    }

    .repo-description {
      font-size: 0.9rem;
      color: #e5e7eb;
      margin: 0;
    }

    .repo-link {
      font-size: 0.9rem;
      color: #4da6ff;
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .repo-link:hover {
      text-decoration: underline;
    }

    .repo-stars {
      position: absolute;
      top: 16px;
      right: 12px;
      font-size: 0.9rem;
      color: #f5d547;
      font-weight: 500;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .repo-card:hover .repo-stars {
      opacity: 1;
    }

    .error {
      color: orange;
      margin-top: 5em;
      text-align: center;
    }

    loading-indicator {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'projects-view': ProjectsView;
  }
}
