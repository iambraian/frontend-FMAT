<template lang="html">
  <div class="news-item">
    <p><img src="../assets/newsimg.png" alt="news"></p>
    <h3 class="news-title">Tercer Informe de la Gestión 2015 - 2018</h3>
    <p>El rector escuchó las propuestas, opiniones y aclaró las dudas de la comunidad universitaria</p>

    <a href="#" class="read-more">Leer Más</a>
  </div>
</template>

<script>
export default {
  name: 'landing-news',
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
  .news-item{
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center
  }

  .read-more{
    width: 100px;
    height: 54px;
    border-color: #163885;
    border-width: 2px;
    border-style: solid;
    font-family: inherit;
    font-size: 18px;
    color: #163885;
    text-align: center;
    padding-top: 12px;
    text-transform: uppercase;
  }
</style>
