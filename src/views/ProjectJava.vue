<template>
  <ProjectView title="Projets Java" description="Réalisation d’un site de covoiturage en utilisant l’interface graphique Netbeans 
  Swing. L’objectif de ce projet est de créer un site de covoiturage permettant de mettre en relation des conducteurs acceptant de 
  ne pas voyager seuls et des passagers recherchant un moyen de se déplacer. Les conducteurs et les passagers peuvent s’inscrire 
  sur le site en renseignant leurs informations, une fois inscrits ils peuvent se connecter. Chaque conducteur peut proposer des 
  trajets. Un trajet doit pouvoir être recherché en fonction de différents critères, il ne faut pas nécessairement être connecté 
  pour rechercher un trajet. En revanche, pour le demander, l’utilisateur doit forcément être connecté. Lorsqu’un utilisateur 
  demande un trajet, sa demande est mise en attente. Le conducteur qui a proposé le trajet peut ensuite consulter les demandes en
 attente et consulter les informations à propos des passagers en attente. Il peut choisir de les accepter ou de les refuser. Enfin, 
 l’administrateur du site peut se connecter et consulter les informations à propos des passagers, conducteurs et trajets. "/>
  
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