import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/seating',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '/seating', component: () => import('pages/SeatingPage.vue') }],
  },
  {
    path: '/itinerary/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '/itinerary/:id', component: () => import('pages/ItineraryPage.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
