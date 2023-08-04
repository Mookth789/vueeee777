import { createRouter, createWebHistory } from 'vue-router'
import all_users from '../views/all_users.vue'
import add_user from '../views/add_user.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
   {
     path: '/',
     component: all_users
   },
    {
     path: '/add',
     component: all_user
   },
  ]
})

export default router
