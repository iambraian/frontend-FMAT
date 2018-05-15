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

      <div class="content limited">

        <h1 id="organigrama">Organigrama</h1>
        <img src="../assets/organigrama-FMAT-2018.jpg" alt="">

        <h1 id="normatividad">Normatividad</h1>
        <h4>Normatividad Institucional</h4>
        <ul>
          <li><a href="http://www.abogadogeneral.uady.mx/legislacionuniv.html">Legislación Universitaria</a></li>
        </ul>
        <h4>Normatividad de la Facultad</h4>
        <ul>
          <li><a href="http://www.matematicas.uady.mx/files/documents/normatividad/Nuevo_Reglamento_Interior_29-09-2013.pdf">Reglamento Interior</a></li>
          <li><a href="http://www.matematicas.uady.mx/files/documents/normatividad/Manual-de-Opciones-de-Titulacion-2018.zip">Manual de Opciones de Titulación</a></li>
          <li><a href="http://www.matematicas.uady.mx/files/documents/normatividad/M_Procedimientos_Movilidad_Interna_OE5A1.pdf">Manual de Procedimientos para Movilidad Estudiantil del Campus de Ciencias Exactas e Ingenierías</a></li>
          <li><a href="http://www.matematicas.uady.mx/files/documents/normatividad/Manual_Organizacion_Final.pdf">Manual de Organización de la Facultad</a></li>
          <li><a href="http://www.matematicas.uady.mx/files/documents/normatividad/2013_04_15_MANUAL_DE_INDUCCION_FMAT_final2.pdf">Manual de Inducción para Personal Administrativo y Manual</a></li>
        </ul>

        <h1 id="politicas">Políticas</h1>
        <h4>Políticas de interés para el personal y los proveedores</h4>
        <ul>
          <li><a href="http://www.matematicas.uady.mx/files/documents/normatividad/politicas/POLITICAS-RELOJ-CHECADOR.pdf">Registro de Asistencias en el Sistema Institucional de Registro de Asistencias</a></li>
          <li><a href="http://www.matematicas.uady.mx/files/documents/normatividad/politicas/2014-Politica-de-asistencia-y-retardos.pdf">Aviso de los Retardos e Inasistencias</a></li>
          <li><a href="http://www.matematicas.uady.mx/files/documents/normatividad/politicas/2013_Integracin_de_Expedientes.pdf">Elaboración y Actualización de Expedientes del Personal</a></li>
          <li><a href="http://www.matematicas.uady.mx/files/documents/normatividad/politicas/2013_Politica_de_ingreso_en_dias_inhabiles.pdf">Ingreso al Campus en Días Inhábiles y en Períodos Vacacionales</a></li>
          <li><a href="http://www.matematicas.uady.mx/files/documents/normatividad/politicas/2014_Servicio-de-fotocopiado.pdf">Servicio de Fotocopiado</a></li>
          <li><a href="http://www.matematicas.uady.mx/files/documents/normatividad/politicas/2013_Promociones_de_eventos_y_productos.pdf">Ingreso de Proveedores para Promoción de Productos y Servicios</a></li>
          <li><a href="http://www.matematicas.uady.mx/files/documents/normatividad/politicas/2014_2_Politica_de_apoyo_secretarial.pdf">Apoyo Secretarial a los Académicos</a></li>
        </ul>

        <h1 id="consejo">Consejo Académico</h1>
        <h4>Convocatorias</h4>
        <ul>
          <li><a href="http://www.matematicas.uady.mx/files/documents/normatividad/consejo-academico/Convocatoria-Alumnos-Consejo-Academico-2015-2017.pdf">Convocatoria para alumnos representantes ante el Consejo Académico Septiembre 2015 - Septiembre 2017</a></li>
          <li><a href="http://www.matematicas.uady.mx/files/documents/normatividad/consejo-academico/Convocatoria-Profesores-Consejo-Academico-2015-2017.pdf">Convocatoria para académicos representantes ante el Consejo Académico Septiembre 2015 - Septiembre 2017</a></li>
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
