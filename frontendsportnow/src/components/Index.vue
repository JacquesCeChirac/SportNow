<template>
  <div class="hello">
    <img id="map" src="../assets/img/Auxerre.png"/>
    <md-layout>
      <h2>Trouvez facilement des sportifs autour de vous</h2>
      <h4>
        Vos sortez du travail, vous découvrez une nouvelle ville, aucun de vos amis n'est disponible ?
        Sortez votre téléphone et SportNow!
      </h4>
      <p>
        <b>Vous manquez de participants ?</b>
        Créer votre partie et invitez vos amis a vous rejoindre !
      </p>
      <p>
        Retrouvez <b>l'ensemble des évènements sportifs</b> autour de vous !
      </p>
      <p>
        <b>Améliorez votre niveau</b> et ajoutez tous les sports que vous souhaitez !
      </p>
    </md-layout>
    <div class="md-layout">
      <div class="md-layout-item double-carre texte"></div>
      <div class="md-layout-item double-carre photo">
        <img src="../assets/img/muriel.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
h2{
  font-size: 40px;
  margin-top: 25px;
  font-weight: 900;
}
h4{
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  color: #abadbe;
  line-height: 1.8;
  font-weight: 500;
}
.texte{
  background-color: #211b31;
  //min-height: 400px;
}
.white-bloc{
  height: 1000px;
}
#map{
  width: 100%;
  opacity: 0.5;
}
</style>
