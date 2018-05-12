<template lang="html">
  <div>
    <fmat-header></fmat-header>

    <div class="internal-body">
      <div class="sidenav">
        <div class="sideblock">

        </div>
      </div>

      <div class="content">

      </div>
    </div>

    <fmat-footer></fmat-footer>
  </div>
</template>

<script>
import FmatHeader from '@/components/FmatHeader'
import FmatFooter from '@/components/FmatFooter'

export default {
  name: 'Academics',
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
