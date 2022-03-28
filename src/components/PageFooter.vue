<template>
  <div class = "footer">
    <div class = "footer-line">
      <div class = "line"></div>
    </div>
    <div class = "informations-line">
      <div class = "information tel-information">
        <img alt="telephone logo" src="../assets/bx-phone.svg">
        <p><a v-bind:href="'tel:' + tel">{{ tel }}</a></p>
      </div>
      <div class = "information email-information">
        <img alt="enveloppe logo" src="../assets/bx-envelope.svg">
        <p><a v-bind:href="'mailto:' + email">{{ email }}</a></p>
      </div>
      <div class = "information">
        <img alt="map logo" src="../assets/bx-map.svg">
        <p>{{ adresse }}</p>
      </div>
    </div>
    <div class = "links">
      <img alt="linkedin logo" src="../assets/bxl-linkedin-square.svg">
      
      <img alt="git logo" src="../assets/bxl-github.svg">
    </div>
  </div>
    
  
</template>

<script>
export default {
  name: 'PageFooter',
  props: {
    tel: String,
    email: String, 
    adresse : String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer-line {
        display: flex;
        justify-content: center;
    }
    .line {
        width: 80%;
        border-bottom: 1px solid #E0E0E0
    }

    .informations-line{
      display: flex;
      flex-direction: row;
      justify-content: center;
      font-size: 12px;
    }

    .information{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px;
    }

    .information img{
      padding-right: 8px;
    }

    .email-information a{
          text-decoration: none;
          color: black;
    }

    .tel-information a{
      text-decoration: none;
      color: black;
    }

</style>