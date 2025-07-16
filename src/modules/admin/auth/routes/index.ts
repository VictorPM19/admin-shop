import type { RouteRecordRaw } from 'vue-router';
import isNotAuthenticatedGuard from '../guards/is-not-authenticated.guard';

export const authRoutes: RouteRecordRaw = {
  path: '/auth',
  name: 'auth',
  beforeEnter: [isNotAuthenticatedGuard],
  redirect: { name: 'login' },
  component: () => import('@/modules/admin/auth/layouts/AuthLayout.vue'),
  children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('@/modules/admin/auth/views/LoginView.vue'),
    },

    {
      path: 'register',
      name: 'register',
      component: () => import('@/modules/admin/auth/views/RegisterView.vue'),
    },
  ],
};
