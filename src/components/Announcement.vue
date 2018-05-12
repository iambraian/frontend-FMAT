<template lang="html">
  <div class="announcement">
    <img src="" alt="">
    <div class="">

    </div>
  </div>
</template>

<script>
export default {
  name: 'announcement',
  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
  .announcement{
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 16px;
    border-top: 2px solid #000000;
  }


</style>
