<template>
  <div class = "header">
  <nav>
    <router-link to="/"><img alt="Vue logo" src="./assets/logo.svg"></router-link> 
    <router-link to="/">Accueil</router-link> 
    <router-link to="/portfolio">Portfolio</router-link> 
    <router-link to="/services">Services</router-link>
  </nav>
  <label class="switch">
      <input 
      name="darkToggleCheckbox" 
      type="checkbox"
      v-on:click="addClass"  
      >
      <span class="slider round"></span>
    </label>
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
  },
  data () {
    return {
      isAddClass: false
    }
  },
  methods: {
    addClass: function() {
        const body = document.body;
        const app = document.getElementById("app");
        if(this.isAddClass == false){
                this.isAddClass = true;
                body.style.background = "#121212DE";
                app.style.color = "white";
        }else{
          this.isAddClass = false;
          body.style.background = "#FFFFFF";
          app.style.color = "#121212";
        }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #121212;
}

nav {
  padding: 30px;
  color: red;
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
