import { APP_TITLE } from './utils/constants';
import { html } from 'lit';
import type { RouteConfig } from '@lit-labs/router';

export const routes: RouteConfig[] = [
  {
    path: '/',
    render: () => html`<home-page></home-page>`,
    enter: async (): Promise<boolean> => {
      await import('./pages/home.ts');
      document.title = `${APP_TITLE} | Inspiring innovation, empowering collaboration, enabling progress, and driving impact through code`;
      return true;
    },
  },
  {
    path: '/about',
    render: () => html`<about-page></about-page>`,
    enter: async (): Promise<boolean> => {
      await import('./pages/about.ts');
      document.title = `${APP_TITLE} | About`;
      return true;
    },
  },
  {
    path: '/projects',
    render: () => html`<projects-page></projects-page>`,
    enter: async (): Promise<boolean> => {
      await import('./pages/projects.ts');
      document.title = `${APP_TITLE} | Projects`;
      return true;
    },
  },
  {
    path: '/*',
    render: () => html`<not-found-page></not-found-page>`,
    enter: async (): Promise<boolean> => {
      await import('./pages/not-found.ts');
      document.title = `${APP_TITLE} | Page not found`;
      return true;
    },
  },
];
