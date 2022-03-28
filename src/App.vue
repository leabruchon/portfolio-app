<template>
  <div class = "header">

   
  <nav>
    <router-link to="/"><img alt="Vue logo" src="./assets/logo.svg"></router-link> 
    <router-link to="/portfolio">Portfolio</router-link> 
    <router-link to="/about">À propos</router-link>
  </nav>
  </div>
  <router-view/>
  
        
</template>

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
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #00A6FF;
  
}

.header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 100px;
}

.header img{
    width: 40px;
    height: 40px;
    
    
}
</style>
