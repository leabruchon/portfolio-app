<template>
  <div class="home">
    
    <div class = "home-content">
      <div class = "home-left-content">
        <div class = "text-content">
          <div class = "title" :class="{'toglleText': isAddClass}">
            <h1 :class="{'toglleText': isAddClass}">Étudiante en Ingénierie et Numérique</h1>
          </div>
          <div class = "text-presentation">
            <p :class="{'toglleText': isAddClass}">En quatrième année à l’EPF Cachan, je recherche un contrat de professionnalisation dans le domaine du développement FullStack, afin de devenir consultante.</p>
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
import DownloadButton from '@/components/DownloadButton.vue';

export default {
  name: 'HomeView',
  components: {
    DownloadButton, 
  }/*,
  data () {
    return {
      isAddClass: false
    }
  },
  methods: {
    addClass: function() {
        const body = document.body;
        if(this.isAddClass == false){
                this.isAddClass = true;
                body.style.background = "#121212DE";
        }else{
          this.isAddClass = false;
          body.style.background = "#FFFFFF";
        }
    }
  }*/
}

 

</script>

<style>

#home-picture {
  width: 80%;

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
}


/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.toglleText{
  color: white;
}

</style>

