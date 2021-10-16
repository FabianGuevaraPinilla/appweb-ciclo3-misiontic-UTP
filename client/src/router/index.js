import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/premios',
    name: 'premios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "premios" */ '../views/Premios.vue')
  },
  {
    path: '/eventos',
    name: 'eventos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "eventos" */ '../views/Eventos.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {
      requiresAuthAdmin: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "eventos" */ '../views/DashboardAdmin.vue')
  },
  {
    path: '/eventos/detalle/:id',
    name: 'DetalleEvento',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "eventos" */ '../views/DetalleEvento.vue')
  },
  {
    path: '/premios/detalle/:id',
    name: 'DetallePremio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "eventos" */ '../views/DetallePremio.vue')
  },
  { path: '*', beforeEnter: (to, from, next) => { next('/404') } },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuthAdmin)) {
    if (localStorage.auth === "OK" && localStorage.getItem("rol")==="ADMIN") {
      next();
    } else {
      next({ name: "Home" });
    }
  } else {
    next();
  }
});
export default router
