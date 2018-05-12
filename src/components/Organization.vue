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
        <img src="../assets/organigrama-FMAT-2018.jpg" alt="">

        <h1 id="normatividad">Normatividad</h1>
        <h4>Normatividad Institucional</h4>
        <ul>
          <li>Legislación Universitaria</li>
        </ul>
        <h4>Normatividad de la Facultad</h4>
        <ul>
          <li>Reglamento Interior</li>
          <li>Manual de Opciones de Titulación</li>
          <li>Manual de Procedimientos para Movilidad Estudiantil del Campus de Ciencias Exactas e Ingenierías</li>
          <li>Manual de Organización de la Facultad</li>
          <li>Manual de Inducción para Personal Administrativo y Manual</li>
        </ul>

        <h1 id="politicas">Políticas</h1>
        <h4>Políticas de interés para el personal y los proveedores</h4>
        <ul>
          <li>Registro de Asistencias en el Sistema Institucional de Registro de Asistencias</li>
          <li>Aviso de los Retardos e Inasistencias</li>
          <li>Elaboración y Actualización de Expedientes del Personal</li>
          <li>Ingreso al Campus en Días Inhábiles y en Períodos Vacacionales</li>
          <li>Servicio de Fotocopiado</li>
          <li>Ingreso de Proveedores para Promoción de Productos y Servicios</li>
          <li>Apoyo Secretarial a los Académicos</li>
        </ul>

        <h1 id="consejo">Consejo Académico</h1>
        <h4>Convocatorias</h4>
        <ul>
          <li>Convocatoria para alumnos representantes ante el Consejo Académico Septiembre 2015 - Septiembre 2017</li>
          <li>Convocatoria para académicos representantes ante el Consejo Académico Septiembre 2015 - Septiembre 2017</li>
        </ul>

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

  img {
    width: 100%;
  }
</style>
