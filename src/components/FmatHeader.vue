<template lang="html">
  <div class="header">
    <router-link to="/" class="logo"> <img src="../assets/Arrengement.png" alt="logo"> </router-link>
    <div class="top-bar">
      <div class="edu-links">
        <a href="https://es.uadyvirtual.uady.mx/"><img src="../assets/uadyvirtual.png" alt="logo"></a>
        <a href="https://intranet.matematicas.uady.mx/enlinea2/"><img src="../assets/enlinea2.png" alt="logo"></a>
        <a href="https://intranet.matematicas.uady.mx/enlinea/"><img src="../assets/enlinea1.png" alt="logo"></a>
      </div>
      <div class="navbar">
        <a href="#" class="nav-item"> <h5>¿Quienes Somos?</h5> </a>
        <a href="#" class="nav-item"> <h5>Organización</h5> </a>
        <router-link to="/directorio" class="nav-item"> <h5>Directorio</h5> </router-link>
        <a href="#" class="nav-item"> <h5>Académicos</h5> </a>
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
    display: grid;
    font-size: 24px;
    position: relative;
  }

  .logo{
    z-index: 20;
    width: 220px;
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
    grid-template-columns: repeat(3, 98px);
    grid-column-gap: 8px;
    justify-items: center;
    align-items: center;
  }

  .navbar{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background: #EAC657;
    justify-items: stretch;
    align-items: center;
    text-align: center;
    box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.7);
  }

  .nav-item{
    border-right: 1px solid black;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }

  .nav-item h5{
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
  }

  .navbar:last-child{
    border-right: 0px solid black;
  }

  a:visited{
    color: inherit;
  }

  @media only screen and (min-width: 150px) {
    .nav-item h5{
      margin-top: 20px;
    }
    .header{
      top: 0px;
      margin-top: 0px;
      grid-template-columns: 1fr;
    }
    .edu-links{
      justify-self: center;
    }
    .logo{
      display: none;
    }
    .navbar{
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 640px) {
    .nav-item h5{
      margin-top: 1.56em;
    }
    .header{
      top: 144px;
      margin-top: -144px;
      grid-template-columns: auto 1fr;
    }
    .logo{
      display: inherit;
    }
    .edu-links{
      justify-self: end;
    }
    .navbar{
      font-size: inherit;
    }
  }
</style>
