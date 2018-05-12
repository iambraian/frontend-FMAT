<template lang="html">
  <div class="announcement-item">
    <p><img src="../assets/annoimg.png" alt="announcement"></p>
    <p class="date">Enero 24, 2018</p>
    <p class="title">Resultados Convocatoria UADY-KELLOGG 2018</p>
  </div>
</template>

<script>
export default {
  name: 'landing-announcements',
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
  .announcement-item{
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    background: #F3F3F3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    color: #082133;
    padding-bottom: 60px;
  }

  .date{
    font-size: 24px;
    padding: 0px 20px 20px 20px;
    border-bottom: 3px solid #C0C0C0;
  }

  .title{
    padding: 0px 24px 0px 24px;
    font-size: 24px;
    text-align: center;
    text-decoration: underline;
  }
</style>
