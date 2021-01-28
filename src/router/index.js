import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import add from '@/components/add.vue';
import Delete from '@/components/delete.vue';
import done from '@/components/done.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/add',
        name: 'add',
        component: add
      },
      {
        path: '/delete',
        name: 'delete',
        component: Delete
      },
      {
        path: '/done',
        name: 'done',
        component: done
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'active'
})

export default router
