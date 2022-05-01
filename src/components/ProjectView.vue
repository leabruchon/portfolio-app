<template>
  <div class = "content">
    <div class = "left-content">
      <h1>{{ title }}</h1>
      <div class = "project-images">
        <div class = "image"> <img :src="require(`@/assets/${filename}`)"  alt="image aperçu projet"></div>
        <div class = "image"> <img :src="require(`@/assets/${filename2}`)"  alt="image aperçu projet"></div> 
      </div>
    </div>
    <div class = "right-content">
      <div class = "descriptif-projet">
        <h3>Description du projet</h3>
        <p>{{ description }}</p> 
      </div>
      <div class = "technos-projet">
        <h3>Outils utilisées</h3>
        <p>{{technos}}</p>
      </div>
      <div class = "apports-projet">
        <h3>Apports du projet</h3>
        <p>{{ apports }}</p>
      </div>
      
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ProjectView',
    props: {
      title: String,
      description: String,
      technos: String,
      apports: String,
      filename: String,
      filename2: String
    },
}

</script>

<style>

  .content{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
  }

  .right-content{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: justify;
    margin-top: 5em;
    margin-right: 2em;
  }

  .project-images{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .image{
    margin: 0em 2em 0em 2em;

  }

  .image img{
    width: 500px;
  }



  .project-images img{
    border-radius: 15px;
  }

</style>