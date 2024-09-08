import { RouteRecordRaw } from 'vue-router';

const AdministrationBoardPage = () =>
  import('src/modules/AdministrationBoard/pages/AdminBoard.vue');
const SettingHousedPage = () =>
  import('src/modules/SettingHouse/pages/List.vue');
const ControlPanelPage = () => import('src/modules/ControlPanel/pages/ControlPanelPage.vue');
const DirectorBoardPage = () =>
  import('src/modules/DirectorBoard/pages/DirectorBoard.vue');
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: AdministrationBoardPage, name: 'admin_board' },
    ],
    meta: {
      title: 'STOWN',
    },
  },
  {
    path: '/director_board',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: DirectorBoardPage, name: 'director_board' }],
    meta: {
      title: 'STOWN',
    },
  },
  {
    path: '/setting_house',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: SettingHousedPage, name: 'setting_house' }],
    meta: {
      title: 'STOWN',
    },
  },

  {
    path: '/control_page',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: ControlPanelPage, name: 'control_page' }],
    meta: {
      title: 'STOWN',
    },
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    meta: {
      title: 'STOWN',
    },
  },
];

export default routes;
