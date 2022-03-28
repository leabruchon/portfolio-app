<template>
  <div class="home">
    
    <div class = "home-content">
      <div class = "home-left-content">
        <div class = "text-content">
          <div class = "title">
            <h1> Étudiante en Ingénierie et Numérique</h1>
          </div>
          <div class = "text-presentation">
            <p>En quatrième année à l’EPF Cachan, je recherche un contrat de professionnalisation dans le domaine... </p>
          </div>
        </div>
        
        <div class = "download-button">
          <DownloadButton/>
        </div>
      </div>
      
      <div id = "home-picture">
        <img alt="Vue logo" src="../assets/home-picture.svg">
      </div>
    
  </div>
  <PageFooter tel="07 81 39 87 79" email="lea.bruchon@epfedu.fr" adresse="Chatenay-Malabry, 92 290" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import PageFooter from '@/components/PageFooter.vue'
import DownloadButton from '@/components/DownloadButton.vue'


export default {
  name: 'HomeView',
  components: {
    PageFooter,
    DownloadButton
  }
}
</script>

<style>

#home-picture {
  width: 80%;
}

#home-picture img{
  width:70%;
}

.information-line{
  display: flex;
  flex-direction: row;
}

.home-content{
  display: flex;
  flex-direction: row;
}

.home-left-content{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  text-align: left;
  padding-left: 10%;
}

</style>

