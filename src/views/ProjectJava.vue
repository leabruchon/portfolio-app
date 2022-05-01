<template>
  <ProjectView 
  title="Projet Java" 
  description="L’objectif de ce projet était d’ajouter différentes fonctionnalités dans un projet template. Le projet permet 
  de gérer des locations de voiture pour un professionnel : ajouter/modifier/supprimer des clients, des véhicules et des 
  réservations. Réalisation du début du projet sans le framwork Spring puis ajout de ce dernier par la suite."
  technos="Maven, Spring, Eclipse IDE"
  apports="Reprendre en main les bases du java
  Découverte et prise en main de maven et de Spring 
  Utiliser java pour le web"
  filename="image2.png"
  filename2="image2.png"/>

</template>

<script>
    import ProjectView from '@/components/ProjectView.vue'

    export default {
    name: 'ProjectJava',
  components: {
      ProjectView
  }
}

</script>

<style>

</style>