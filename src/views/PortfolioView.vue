<template>
    <div class = "portfolio">
        <div class = "title">
            <h1> Projets</h1>
        </div>
        <div class = "project-boxs">
            <PortfolioProjectApercu filename = "image1.png"/>
            <PortfolioProjectApercu filename = "bx-map.svg"/>
            <PortfolioProjectApercu filename = "home-picture.svg"/>
            <PortfolioProjectApercu filename = "home-picture.svg"/>
        </div>
        
    </div>
</template>

<script>
import PortfolioProjectApercu from '@/components/PortfolioProjectApercu.vue'

    export default {
    name: 'PortfolioView',
  components: {
    PortfolioProjectApercu
  }
}

</script>

<style>

    .project-boxs{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

</style>

