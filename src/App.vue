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

  p a, li a{
    text-decoration: inherit;
    color: #2196F3;
  }

  body{
    margin: 0;
  }

  .body{
    display:grid;
  }

  .internal-body{
    display: grid;
    background-color: #0D116E;
  }

  .content{
    padding: 44px 16px 16px 16px;
    background-color: #F1F1F1;
  }

  .sidebar{
    justify-self: stretch;
    align-self: stretch;
    background-color: #0D116E;
  }

  .sidenav {
      justify-self: stretch;
      align-self: stretch;
      background-color: #0D116E;
  }

  .sideblock {
    width: 228px;
    position: fixed;
    top: 220px;
    background: #eee;
    overflow-x: hidden;
    padding-top: 8px;
  }

  .sideblock h3 {
    text-align: center;
  }

  .sideblock p {
    border: solid;
    border-width: 1px 0px 0px 0px;
    background-color: #eee;
    padding: 5px;
    margin-bottom: 0;
  }

  .sideblock a {
    text-decoration: none;
    font-size: 25px;
    color: #2196F3;
  }

  .sideblock #lastSideMenu {
    border-width: 1px 0px 1px 0px;
  }

  .sideblock a:hover {
      color: #064579;
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

    .internal-body{
      grid-template-columns: 1fr;
    }

    .limited{
      width: 100%;
    }

    .sidebar{
      display: none;
    }

    .sidenav{
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

    .internal-body{
      grid-template-columns: 228px 1fr;
    }

    .limited{
      width: 90%;
    }

    .sidebar{
      display: inherit;
    }

    .sidenav{
      display: inherit;
    }
  }
</style>
