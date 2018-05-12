<template lang="html">
  <div class="announcement">
    <img src="../assets/convo.png" alt="convocatoria" class="news-image">
    <div class="details">
      <h1 class="news-title"><strong>Calendario de exámenes extraordinarios</strong></h1>
      <p>Fecha: 01/01/18 12:30</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'announcement',
  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
  .announcement{
    display: grid;
    margin-bottom: 48px;
  }

  .news-title{
    font-size: 30px;
  }

  @media only screen and (min-width: 150px) {

    .announcement{
      grid-template-columns: 1fr;
      grid-column-gap: 0px;
      justify-items: center;
      grid-row-gap: 16px;
      border-top: 0px solid #000000;
      border-bottom: 2px solid #000000;
    }

    .news-image{
      width: 100%;
    }
  }

  @media only screen and (min-width: 640px) {

    .announcement{
      grid-template-columns: auto 1fr;
      grid-column-gap: 16px;
      justify-items: start;
      grid-row-gap: 0px;
      border-top: 2px solid #000000;
      border-bottom: 0px solid #000000;
    }

    .news-image{
      width: auto;
    }
  }
</style>
