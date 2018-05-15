<template lang="html">
  <div class="card" v-if="showContact">

    <p>{{name}}</p>

    <p>
      <span class="underline">{{cubicle}}</span> <br>
      <span class="label">Cubículo</span>
    </p>

    <p>
      <span class="underline">{{extention}}</span> <br>
      <span class="label">Extensión</span>
    </p>

    <p>
      <span class="underline"> <a :href="mailto" target="_top">{{mail}}</a> </span> <br>
      <span class="label">Correo</span>
    </p>

  </div>
</template>

<script>
export default {
  name: 'contect-card',
  props: ['name', 'cubicle', 'extention', 'mail', 'searchTerm'],
  data () {
    return {
      mailto: 'mailto:' + this.mail
    }
  },
  computed: {
    showContact () {
      if (this.searchTerm !== '') {
        return this.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .card{
    text-align: center;
    background-color: #F1F1F1;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    padding: 8px 8px 0px 8px;
  }

  .underline{
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    padding: 0px 10px 0px 10px;
  }

  .label{
    font-size: 14px;
  }
</style>
