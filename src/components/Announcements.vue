<template lang="html">
  <div>
    <fmat-header></fmat-header>
    <div class="body">
      <div class="sidebar"></div>

      <div class="content">
        <h1 class="page-header"> <strong>Convocatorias</strong> </h1>

        <div class="announcements-area">
          <a href="#"><announcement></announcement></a>
          <a href="#"><announcement></announcement></a>
          <a href="#"><announcement></announcement></a>
          <a href="#"><announcement></announcement></a>
          <a href="#"><announcement></announcement></a>
          <a href="#"><announcement></announcement></a>
        </div>

      </div>

      <div class="sidebar"></div>
    </div>
    <fmat-footer></fmat-footer>
  </div>
</template>

<script>
import FmatHeader from '@/components/FmatHeader'
import FmatFooter from '@/components/FmatFooter'
import Announcement from '@/components/Announcement'

export default {
  name: 'news',
  components: {
    FmatHeader, FmatFooter, Announcement
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
  .announcements-area{ margin-top: 48px; }
</style>
