<template>
    <a href="/files/curriculum-vitae.pdf" download>Télécharger mon CV
        <img alt="download logo" src="../assets/bxs-download.svg">
    </a>
  
</template>

<script>



export default {
  name: 'DownloadButton',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a{
        border: 2px solid #000000;
        border-radius: 25px;
        padding: 10px;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
        color: black;
    }

    img{
        width: 10%;
    }

</style>