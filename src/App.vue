<template>
  <div class = "header">
  <nav>
    <router-link to="/"><h1 id="LBlogo" style="height: 50px;">LB</h1></router-link> 
    <router-link to="/">Accueil</router-link> 
    <router-link to="/portfolio">Portfolio</router-link> 
  </nav>
  <label class="switch">
      <input 
      name="darkToggleCheckbox" 
      type="checkbox"
      v-on:click="addClass">
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
       
        var elemsA = document.body.getElementsByTagName("*");
        console.log(elemsA);
        if(this.isAddClass == false){
                this.isAddClass = true;
                body.style.background = "#121212DE";                
                for (let a of elemsA){
                  a.style.color = "white";
                }
        }else{
          this.isAddClass = false;
          body.style.background = "#FFFFFF";
          for (let a of elemsA){
                  a.style.color = "#121212";
                }
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
body{
  margin: 0 5%;
}

#LBlogo{
  font-size:2em;
  font-size: 3em;
  margin: 0;
}

nav {
  padding: 2% 0;
  display: flex;
  align-items: flex-end;
}

nav a {
  font-weight: bold;
  /*color: black;*/
  text-decoration: none;
  margin-right: 20px;
}

nav a.router-link-exact-active {
  color: #7534FF;
  
}

.header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.header img{
    width: 40px;
    height: 40px;
    margin-bottom: -3px;
    
}

nav a.router-link img{
  margin-right: 30px;
}

@media screen and (max-width: 900px) {
  .home-content {
    flex-wrap: wrap;
    justify-content: center;

  }

  .home-left-content {
    align-items: center!important;
    text-align: center!important;
    margin-bottom: 5%;
  }

}

</style>
