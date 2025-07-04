import type {
  ActionResult,
  Route,
  RouteContext,
  Commands,
} from '@vaadin/router';

export const routes: Route[] = [
  {
    path: '/',
    async action(
      this: Route,
      _context: RouteContext,
      commands: Commands
    ): Promise<ActionResult> {
      await import('./views/home-view');
      document.title =
        'Code Cause | Inspiring innovation, empowering collaboration, enabling progress, and driving impact through code';
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
      document.title = 'Code Cause | About';
      return commands.component('about-view');
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
      document.title = 'Code Cause | Page not found';
      return commands.component('not-found-view');
    },
  },
];
