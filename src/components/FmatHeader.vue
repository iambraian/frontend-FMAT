<template lang="html">
  <div class="header">
    <router-link to="/" class="logo"> <img src="../assets/banner.png" alt="logo"> </router-link>
    <div class="top-bar">
      <div class="edu-links">
        <a href="https://es.uadyvirtual.uady.mx/"><img src="../assets/uadyvirtual.png" alt="logo"></a>
        <a href="https://intranet.matematicas.uady.mx/enlinea2/"><img src="../assets/enlinea2.png" alt="logo"></a>
      </div>
      <div class="nav">
        <router-link to="/historia" class="nav-item"> <h5>¿Quienes Somos?</h5> </router-link>
        <router-link to="/organizacion" class="nav-item"> <h5>Organización</h5> </router-link>
        <router-link to="/directorio" class="nav-item"> <h5>Directorio</h5> </router-link>
        <router-link to="/academicos" class="nav-item"> <h5>Académicos</h5> </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fmat-header',
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
  .header{
    z-index: 5;
    display: grid;
    font-size: 24px;
    position: relative;
    margin-bottom: 80px;
  }

  .logo{
    z-index: 20;
    width: 302px; /*220*/
    height: 165px;
  }

  .top-bar{
    display: grid;
    background-color: #0D116E;
    grid-template-columns: 1fr;
    grid-template-rows: 85px 80px;
    height: 165px;
  }

  .edu-links{
    display: grid;
    grid-template-columns: repeat(2, 98px);
    grid-column-gap: 8px;
    justify-items: center;
    align-items: center;
  }

  .nav{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background: #EAC657;
    justify-items: stretch;
    align-items: center;
    text-align: center;
    box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.4);
  }

  .nav-item{
    border-left: 1px solid #B89B44;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }

  .nav-item h5{
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
  }

  a:visited{ color: inherit; }

  @media only screen and (min-width: 150px) {

    .nav-item h5{ margin-top: 20px; }

    .header{
      top: 0px;
      margin: 0px 0px 0px;
      grid-template-columns: 1fr;
    }
    .edu-links{ justify-self: center; }

    .logo{ display: none; }

    .nav{
      font-size: 16px;
      overflow: hidden;
    }
  }

  @media only screen and (min-width: 640px) {

    .nav-item h5{ margin-top: 0.56em; }

    .header{ grid-template-columns: auto 1fr; }

    .logo{ display: inherit; }

    .edu-links{ justify-self: end; }

    .nav{ font-size: inherit; }

    .van .icon { display: none; }
  }
</style>
