<template>
  <div class="home">
    <div class = "home-content">
      <div class = "home-left-content">
        <div class = "text-content">
          <div class = "title">
            <h1> Étudiante en Ingénierie et Numérique</h1>
          </div>
          <div class = "text-presentation">
            <p>En quatrième année à l’EPF Cachan, je recherche un contrat de professionnalisation dans le domaine du développement FullStack, afin de devenir consultante.</p>
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
   </div>
</template>

<script>
// @ is an alias to /src
import DownloadButton from '@/components/DownloadButton.vue'


export default {
  name: 'HomeView',
  components: {
    DownloadButton
  }
}
</script>

<style>

#home-picture {
  width: 80%;
  padding-right : 10%;
}

#home-picture img{
  width:100%;
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

