<template>
    

    
    <div class = "project-apercu">
        
    </div>
      

</template>

<script>
    export default {
        name: 'PortfolioProjectApercu',
        props: {
            title: String,
            description: String, 
            date : String
        }
    }
    

</script>

<style>

    .project-apercu{
        width: 300px;
        height: 400px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 2px #dbdada;
    }

</style>