// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import VistaInicio from '../views/Inicio.vue';
import VistaContacto from '../views/Contacto.vue';
import VistaSobreNosotros from '../views/SobreNosotros.vue';

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: VistaInicio,
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: VistaContacto,
  },
  {
    path: '/sobre-nosotros',
    name: 'Sobre Nosotros',
    component: VistaSobreNosotros,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
