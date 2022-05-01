import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ProjectView from '../components/ProjectView.vue'
import ProjectGreenTeam from '../views/ProjectGreenTeam.vue'
import ProjectPortfolio from '../views/ProjectPortfolio.vue'
import ProjectCrustBreak from '../views/ProjectCrustBreak.vue'
import ProjectJava from '../views/ProjectJava.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  },
  {
    path: '/projet',
    name: 'projet',
    component: ProjectView
  },
  {
    path: '/projet-green-team',
    name: 'projet-green-team',
    component: ProjectGreenTeam
  },
  {
    path: '/projet-portfolio',
    name: 'projet-portfolio',
    component: ProjectPortfolio
  },
  {
    path: '/projet-crust-break',
    name: 'projet-crust-break',
    component: ProjectCrustBreak
  },
  {
    path: '/projets-java',
    name: 'projets-java',
    component: ProjectJava
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
