<template>
  <div>
    <fmat-header></fmat-header>
    <div class="slider">
      <img class="news-image" src="../assets/MainNews.png" alt="">
    </div>
    <div class="news-section">
      <h1 class="section-header">Noticias</h1>
      <p class="section-more" @click="scrollMeToTop()"><router-link to="/noticias">VER MÁS NOTICIAS »</router-link></p>
      <div class="showcase">
        <landing-news></landing-news>
        <landing-news></landing-news>
        <landing-news></landing-news>
      </div>
    </div>
    <div class="announcements-section">
      <h1 class="section-header">Convocatorias</h1>
      <p class="section-more" @click="scrollMeToTop()"><router-link to="/noticias">VER MÁS CONVOCATORIAS »</router-link></p>
      <div class="showcase">
        <landing-announcements></landing-announcements>
        <landing-announcements></landing-announcements>
        <landing-announcements></landing-announcements>
      </div>
    </div>
    <fmat-footer></fmat-footer>
  </div>
</template>

<script>
import FmatHeader from '@/components/FmatHeader'
import FmatFooter from '@/components/FmatFooter'
import LandingNews from '@/components/LandingNews'
import LandingAnnouncements from '@/components/LandingAnnouncements'

export default {
  name: 'LandingPage',
  components: {
    FmatHeader, FmatFooter, LandingNews, LandingAnnouncements
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    scrollMeToTop() {

      window.scrollTo(0,0);
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

.section-header{
  font-size: 48px;
  margin-bottom: 24px;
}

.section-more{
  position: absolute;
  right: 112px;
  margin-top: -60px;
}

.news-section{
  text-align: center;
  background-color: #F3F3F3;
  padding: 24px 112px 80px 112px;
}

.announcements-section{
  text-align: center;
  background-color: #0D116E;
  color: #F3F3F3;
  padding: 24px 112px 80px 112px;
}

.news-section .showcase{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 56px;
}

.announcements-section .showcase{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 61px;
}
</style>
