<template>
  <div class="wrap-map-content">
    <mapgis :id="id"></mapgis>
  </div>
</template>
<style lang="scss" scoped>
  .wrap-map-content {
    width: 100%;
    height: 100%;
  }
</style>

<script>
  import mapgis from '@/components/mapgis.vue'
  export default {
    data () {
      return {
        id: ''
      }
    },
    mounted () {
      this.id='map'
    },
    components: {
      mapgis
    }
  }
</script>
