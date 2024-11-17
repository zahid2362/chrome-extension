import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import SettingsPage from '../views/Setting.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/index.html',
    redirect: '/'
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
