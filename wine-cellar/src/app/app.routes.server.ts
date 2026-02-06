import { RenderMode, ServerRoute } from '@angular/ssr';


export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender, // or Server
  },
  {
    path: 'wine/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Example: fetch IDs from DB / API
      return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
      ];
    },
  },
];
