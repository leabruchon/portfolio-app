<template>
  <div class = "content">
    <div class = "left-content">
      <h1>{{ title }}</h1>
      <div class = "project-images">
        <div class = "image"><img alt="project image" src="../assets/image1.png"></div>
        <div class = "image"><img alt="project image" src="../assets/image2.png"></div> 
      </div>
    </div>
    <div class = "right-content">
      <div class = "descriptif-projet">
        <h3>Description du projet</h3>
        <p>{{ description }}</p>
      </div>
      <div class = "technos-projet">
        <h3>Technologies utilisées</h3>
        <p>blabla</p>
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
      apports: String
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
    margin: 0em 2em 0em 2em;;
  }

  .project-images img{
    border-radius: 15px;
  }

</style>