import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListarPacientesView from '../views/ListarPacientesView.vue'
import IngresarPacientesView from '../views/IngresarPacientesView.vue'
import ConultaResultadosView from '../views/ConultaResultadosView.vue'
import ActualizarPacientesView from '../views/ActualizarPacientesView.vue'
import DetallesPacientesView from '../views/DetallesPacientesView.vue'
import LogView from '../views/LogView.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LogView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ListarPacientes',
    name: 'ListarPacientes',
    component: ListarPacientesView
  },
  {
    path: '/IngresarPacientes',
    name: 'IngresarPacientes',
    component: IngresarPacientesView
  },
  {
    path: '/ConsultaResultados',
    name: 'ConsultaResultados',
    component: ConultaResultadosView
  },
  {
    path: '/ActualizarPacientes',
    name: 'ActualizarPacientes',
    component: ActualizarPacientesView
  },
  {
    path: '/DetallesPacientes/:id',
    name: 'DetallesPacientes',
    component: DetallesPacientesView
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
