<template>
    <div class = "portfolio">
        <div class = "title">
            <h1> Projets</h1>
        </div>
        <div class = "project-boxs">
            <a href= "#/projet-crust-break"><PortfolioProjectApercu filename = "image1.png" title = "Application mobile CrustBreak"/></a>
            <a href= "#/projet-green-team"><PortfolioProjectApercu filename = "image2.png" title = "Golf Green Team"/></a>
            <a href= "#/projet-portfolio"><PortfolioProjectApercu filename = "image2.png" title = "Site Portfolio"/></a>
            <a href= "#/projets-java"><PortfolioProjectApercu filename = "image2.png" title = "Projets Java"/></a>   
        </div>
    </div>
</template>

<script>
import PortfolioProjectApercu from '@/components/PortfolioProjectApercu.vue'

    export default {
    name: 'PortfolioView',
  components: {
    PortfolioProjectApercu,
  }
}

</script>

<style>

    .project-boxs{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .project-boxs a{
        text-decoration: none;
        color: #2c3e50;
        margin-bottom: 10%;
    }

</style>

