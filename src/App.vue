<template>
  <div class = "header">

   
  <nav>
    <router-link to="/"><img alt="Vue logo" src="./assets/logo.svg"></router-link> 
    <router-link to="/">Accueil</router-link> 
    <router-link to="/portfolio">Portfolio</router-link> 
  </nav>
  </div>
  <router-view/>
  
  <PageFooter tel="07 81 39 87 79" email="lea.bruchon@epfedu.fr" adresse="Chatenay-Malabry, 92 290" />
        
</template>

<script>
// @ is an alias to /src
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'HomeView',
  components: {
    PageFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
  margin: 10px;
}

nav a.router-link-exact-active {
  color: #7534FF;
  
}

.header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5%;
}

.header img{
    width: 40px;
    height: 40px;
    margin-bottom: -3px;
    
}

nav a.router-link img{
  margin-right: 30px;
}
</style>
