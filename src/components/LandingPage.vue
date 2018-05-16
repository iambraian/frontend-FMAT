<template>
  <div>
    <fmat-header></fmat-header>
    <div class="slider-main">
      <img class="news-image" src="../assets/MainNews.png" alt="">
      <div class="slider-wrapper">
        <div class="slider-content">
          <div class="slider-box">
            <h3>Bill Gates recomienda la Facultad de Matemáticas</h3>
            <p>El fundador de Microsoft visita el campus</p>
            <a href="#" class="read-more">Leer Más</a>
          </div>
        </div>
      </div>
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
        <a href="#"><landing-announcements></landing-announcements></a>
        <a href="#"><landing-announcements></landing-announcements></a>
        <a href="#"><landing-announcements></landing-announcements></a>
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
    scrollMeToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .showcase{
    display: grid;
    grid-row-gap: 32px;
  }

  .slider-main{
    position: relative;
    text-align: center;
  }

  .slider-wrapper{ position: absolute; }

  .slider-content {
    z-index: 2;
    opacity: 0.9;
    overflow: hidden;
    background: rgba(15, 38, 60, 0.75) none repeat scroll 0% 0%;
  }

  .slider-box {
    color: white;
    margin: 0 20px 0;
  }

  .slider-box h3{ margin-bottom: 1.4rem; }

  .slider-box p{ margin-bottom: 2rem; }

  .read-more{
    width: 100px;
    height: 54px;
    border-color: white;
    border-width: 2px;
    border-style: solid;
    font-family: inherit;
    font-size: 18px;
    color: white;
    text-align: center;
    padding: 8px 8px 8px 8px;
    text-transform: uppercase;
  }

  .news-image{
    max-width: 100%;
    width: 100%;
    height: auto;
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

  .section-more a{ color: inherit; }

  @media only screen and (min-width: 150px){
    .announcements-section .showcase{
      grid-template-columns: repeat(1, 1fr);
      grid-column-gap: 61px;
    }
    .news-section .showcase{
      grid-template-columns: repeat(1, 1fr);
      grid-column-gap: 32px;
    }
    .news-image {
      max-width: 100%;
      width: 100%;
      height: auto;
    }
    .news-section { padding: 24px 24px 80px 24px; }

    .announcements-section  { padding: 24px 24px 80px 24px; }

    .section-header{ margin-bottom: 8px; }

    .section-more{
      margin: 0px;
      position: static;
      padding-bottom: 24px;
    }

    .slider-wrapper{
      top: 0;
      left: 0;
    }
    .slider-content { width: 100%; }

    .slider-box{ padding: 16px 0px; }

    .slider-box h3{ margin-bottom: .7rem; }

    .slider-box p{ margin-bottom: 1.5rem; }

  }

  @media only screen and (min-width: 640px){
    .news-section .showcase{
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 56px;
    }

    .announcements-section .showcase{
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 61px;
    }

    .slider-wrapper{
      top: 50%;
      left: 50%;
      transform: translate(-80%, -50%);
    }

    .slider-content { width: 100%; }

    .slider-box{ padding: 20px 0px 20px 0px; }

    .slider-box h3{ margin-bottom: .7rem; }

    .slider-box p{ margin-bottom: 1.3rem; }

  }

  @media only screen and (min-width: 1000px){
    .news-section .showcase{
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 56px;
    }

    .announcements-section .showcase{
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 61px;
    }

    .section-header{
      font-size: 48px;
      margin-bottom: 24px;
    }

    .section-more{
      position: absolute;
      right: 112px;
      margin-top: -60px;
      padding: 0px;
    }

    .slider-wrapper{
      top: 50%;
      left: 50%;
      transform: translate(-80%, -50%);
    }

    .slider-content { width: 70%; }

    .slider-box{ padding: 35px; }

    .slider-box h3{ margin-bottom: 1.4rem;  }

    .slider-box p{ margin-bottom: 2rem; }
  }
</style>
