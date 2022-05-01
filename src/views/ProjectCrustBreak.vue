<template>
  <ProjectView 
  title="Projet Crust Break" 
  description="Le projet CrustBreak consiste en la création d’une application cross-platform 
  (IOS/Android/Web) permettant d’allier cuisine et gestion des courses. Cette application permet de consulter des recettes, générer
  des listes de courses en fonction de choix de recettes, générer des recommandations de recettes en fonction de ticket de caisse.
  Dans ce projet, je suis en charge de la partie front-end en binôme. La première étape a été de réaliser des maquettes Figma pour 
  chaque page de l’application sur le principe d’une architecture en composants pour simplifier et conduire le développement. Le 
  parcours utilisateur a été optimisé pour être le plus simple d’utilisation possible et que l’application soit facilement prise en main.
  Je suis dans ce projet responsable de la partie développement front-end, le framework utilisé est Quasar,il est basé sur Vue.js. 
  Ce rôle consiste en la mise en place et le setup du code front-end, l’organisation du développement des différents composants et 
  la réalisation de la navigation de l’application. Le front-end a été relié à une API en backend avec Axios afin de récupérer toutes 
  les données nécessaires notamment pour l’affichage des recettes. "
  technos ="Figma, Quasar, GitHub, VSCode"
  apports="Apprentissage de l’utilisation de Figma en réflexion composants
  Apprendre à utiliser GitHub en équipe, gestion des différentes branches, à faire des merges fetch etc"
  filename = "CrustBreak1.png"
  filename2 = "CrustBreak2.png"
  />
  
  
</template>

<script>
  import ProjectView from '@/components/ProjectView.vue'

  export default {
    name: 'ProjectCrustBreak',
    components: {
      ProjectView,
    }
}

</script>

<style>

</style>