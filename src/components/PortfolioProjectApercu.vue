<template>
    

    
    <div class = "project-apercu">
        <img :src="require(`@/assets/${filename}`)"  alt="image aperçu projet">
        <div class = "title">
            <h3> {{ title }} </h3>
        </div>
    </div>

      

</template>

<script>


    export default {
        name: 'PortfolioProjectApercu',
        props: {
            filename: String,
            title: String,
        }
    }

    

</script>

<style>

    .project-apercu{
        width: 300px;
        height: 350px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 2px #dbdada;
    }

    .project-apercu img {
        width: 100%;
        height: auto;
        border-radius: 10px 10px 0px 0px;
    }

</style>