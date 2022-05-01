<template>

  <ProjectView 
  title="Site Portfolio" 
  description="Ce projet consiste en la réalisation de ce site web  portfolio avec le framework Vue.js. Le site comporte une 
  section Accueil permettant le téléchargement du CV, une section portfolio dans laquelle sont consultables les différents 
  projets réalisés, et enfin une section à propos plus personnelle. Le site est encore en cours de réalisation mais il sera 
  accessible et adapté pour mobile, et de nouvelles fonctionnalités vont être prochainement ajoutées : un mode sombre, un 
  système de filtre dans le portfolio. "
  apports="Apprendre le développement front-end SPA basé sur un système de composants
  Prendre en main Vue.js, un des trois frameworks les plus populaires actuellement
  Apprendre à build un site réalisé avec un framework sur un serveur"
  />
  
</template>

<script>
    import ProjectView from '@/components/ProjectView.vue'

    export default {
    name: 'ProjectPortfolio',
  components: {
      ProjectView,
  }
}

</script>

<style>

</style>