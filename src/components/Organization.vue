<template lang="html">
  <div>
    <fmat-header></fmat-header>

    <div class="internal-body">
      <div class="sidenav">
        <div class="sideblock">
          <h3>Organización</h3>
          <p><a href="#organigrama">Organigrama</a></p>
          <p><a href="#normatividad">Normatividad</a></p>
          <p><a href="#politicas">Políticas</a></p>
          <p id="lastSideMenu"><a href="#consejo">Consejo Académico</a></p>
        </div>
      </div>

      <div class="content">

        <h1 id="organigrama">Organigrama</h1>
        <img src="" alt="">

        <h1 id="normatividad">Normatividad</h1>

        <h1 id="politicas">Políticas</h1>

        <h1 id="consejo">Consejo Académico</h1>

      </div>
    </div>

    <fmat-footer></fmat-footer>
  </div>
</template>

<script>
import FmatHeader from '@/components/FmatHeader'
import FmatFooter from '@/components/FmatFooter'

export default {
  name: 'Organization',
  components: {
    FmatHeader, FmatFooter
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>

</style>
