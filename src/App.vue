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
</style>
