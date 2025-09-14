import type {
  ActionResult,
  Route,
  RouteContext,
  Commands,
} from '@vaadin/router';
import { APP_TITLE } from './utils/constants';

export const routes: Route[] = [
  {
    path: '/',
    async action(
      this: Route,
      _context: RouteContext,
      commands: Commands
    ): Promise<ActionResult> {
      await import('./views/home-view');
      document.title = `${APP_TITLE} | Inspiring innovation, empowering collaboration, enabling progress, and driving impact through code`;
      return commands.component('home-view');
    },
  },
  {
    path: '/about',
    async action(
      this: Route,
      _context: RouteContext,
      commands: Commands
    ): Promise<ActionResult> {
      await import('./views/about-view');
      document.title = `${APP_TITLE} | About`;
      return commands.component('about-view');
    },
  },
  {
    path: '/projects',
    async action(
      this: Route,
      _context: RouteContext,
      commands: Commands
    ): Promise<ActionResult> {
      await import('./views/projects-view');
      document.title = `${APP_TITLE} | Projects`;
      return commands.component('projects-view');
    },
  },
  {
    path: '(.*)',
    async action(
      this: Route,
      _context: RouteContext,
      commands: Commands
    ): Promise<ActionResult> {
      await import('./views/not-found-view');
      document.title = `${APP_TITLE} | Page not found`;
      return commands.component('not-found-view');
    },
  },
];
