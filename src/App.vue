<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Alegreya', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: none;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6{
    font-family: 'Alegreya Sans', sans-serif;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  body{
    margin: 0;
  }

  .body{
    display:grid;
  }

  .content{
    padding: 44px 16px 16px 16px;
  }

  .sidebar{
    justify-self: stretch;
    align-self: stretch;
    background-color: #0D116E;
  }

  .page-header{
    font-size: 30px;
    margin-bottom: 36px;
  }

  @media only screen and (min-width: 150px) {

    .page-header{
      margin-left: 0px;
    }

    .body{
      grid-template-columns: 1fr;
    }

    .sidebar{
      display: none;
    }
  }

  @media only screen and (min-width: 640px) {

    .page-header{
      margin-left: 91px;
    }

    .body{
      grid-template-columns: 114px 1fr 114px;
    }

    .sidebar{
      display: inherit;
    }
  }
</style>
