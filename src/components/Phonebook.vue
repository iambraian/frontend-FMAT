<template lang="html">
  <div>
    <fmat-header></fmat-header>
    <div class="body">
      <div class="sidebar"></div>

      <div class="content">
        <h1 class="phonebook-header"> <strong>Directorio</strong> </h1>
        <span class="search"><i class="material-icons">search</i></span>
        <input class="phonebook-search" v-model="search" type="text" placeholder="Buscar por Nombre">

        <h2 class="section-header">Autoridades</h2>
        <div class="phonebook-section">
          <contact-card
          v-bind:searchTerm="search"
          name="Dr. Ramón Peniche Mena"
          cubicle="Dirección"
          extention="1002"
          mail="pmena@correo.uady.mx"></contact-card>

          <contact-card
          v-bind:searchTerm="search"
          name="M. en C. Martha Imelda Jarero Kumul"
          cubicle="Secretaría Académica"
          extention="1010"
          mail="jarerok@correo.uady.mx"></contact-card>

          <contact-card
          v-bind:searchTerm="search"
          name="M. en C. Carlos Benito Mojica Ruiz"
          cubicle="Secretaría Administrativa"
          extention="1020"
          mail="mruiz@correo.uady.mx "></contact-card>

        </div>

        <h2 class="section-header">Personal Académico Unidad Mérida</h2>
        <div class="phonebook-section">
          <contact-card
          v-bind:searchTerm="search"
          name="Rocío Acosta Pech"
          cubicle="D5"
          extention="1128"
          mail="rocio.acosta@correo.uady.mx"></contact-card>

          <contact-card
          v-bind:searchTerm="search"
          name="Dr. Aarón Abraham Aguayo González"
          cubicle="EA-15"
          extention="1125"
          mail="aguayo@correo.uady.mx"></contact-card>

          <contact-card
          v-bind:searchTerm="search"
          name="Dr. Raúl Antonio Aguilar Vera"
          cubicle="EB-06"
          extention="1101"
          mail="avera@correo.uady.mx"></contact-card>

          <contact-card
          v-bind:searchTerm="search"
          name="L.M. José Andueza Pech"
          cubicle="AA-18"
          extention="1088"
          mail="apech@correo.uady.mx"></contact-card>

          <contact-card
          v-bind:searchTerm="search"
          name="Dr. Jorge Armando Argáez Sosa"
          cubicle="UPI"
          extention="1050"
          mail="argasosa@correo.uady.mx"></contact-card>

          <contact-card
          v-bind:searchTerm="search"
          name="Dr. Eric José Ávila Vales"
          cubicle="EB-13"
          extention="1108"
          mail="avila@correo.uady.mx"></contact-card>

          <contact-card
          v-bind:searchTerm="search"
          name="M.G.T.I. María Enriqueta Castellanos Bolaños"
          cubicle="EB-02"
          extention="1097"
          mail="enriqueta.c@correo.uady.mx"></contact-card>
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
import ContactCard from '@/components/ContactCard'

export default {
  name: 'phonebook',
  components: {
    FmatHeader, FmatFooter, ContactCard
  },
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style lang="css" scoped>

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

  .phonebook-header{
    font-size: 30px;
    margin-bottom: 36px;
  }

  .phonebook-section{
    display: grid;
    grid-row-gap: 16px;
  }

  .section-header{
    font-weight: normal;
    margin-top: 24px;
  }

  .search{
    position: absolute;
    margin-top: 5px;
  }

  .phonebook-search{
    width: 100%;
    background: #F9F9F9;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
    padding: 8px 8px 8px 8px;
  }

  @media only screen and (min-width: 150px) {
    .search{
      right: 19px;
    }

    .phonebook-section{
      grid-template-columns: 1fr;
      grid-column-gap: 0px;
    }

    .phonebook-header{
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
    .search{
      right: 134px;
    }

    .phonebook-section{
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 16px;
    }

    .phonebook-header{
      margin-left: 91px;
    }

    .body{
      grid-template-columns: 114px 1fr 114px;
    }

    .sidebar{
      display: inherit;
    }
  }

  @media only screen and (min-width: 1000px) {
    .phonebook-section{
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 16px;
    }
  }
</style>
