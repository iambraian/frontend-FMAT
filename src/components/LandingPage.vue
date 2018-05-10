<template>
  <div>
    <fmat-header></fmat-header>
    <div class="slider">
      <img class="news-image" src="../assets/MainNews.png" alt="">
    </div>
    <fmat-footer></fmat-footer>
  </div>
</template>

<script>
import FmatHeader from '@/components/FmatHeader'
import FmatFooter from '@/components/FmatFooter'
export default {
  name: 'LandingPage',
  components: {
    FmatHeader, FmatFooter
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slider{
}

.news-image{
  width:100%;
  height: 100%;
}
</style>
