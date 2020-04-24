<template>
    <div :id="id"></div>
</template>
<style lang="scss">
  #map {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
  }
</style>
<script>
  import {loadCss, loadModules} from 'esri-loader'
  export default {
    name: 'mapgis',
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        gisConstructor: {}, // gis 构造函数
        gisInfo: {}, // gis 实例
        gisModules: [
          'esri/Map',
          'esri/WebMap',
          'esri/layers/TileLayer',
          'esri/Basemap',
          'esri/core/urlUtils',
          'esri/views/MapView'
        ]
      }
    },
    /*mounted () {
      this.init()
    },*/
    watch: {
      'id': function(val) {
        this.init()
      }
    },
    methods: {
      init () {
        // 加载css
        loadCss('http://localhost:8001/arcgis_js_v415_api/arcgis_js_api/library/4.15/esri/css/main.css')
        // loadCss('4.12')
        // 加载模块
        loadModules(this.gisModules, {
          url: 'http://localhost:8001/arcgis_js_v415_api/arcgis_js_api/library/4.15/init.js',
          dojoConfig: {
            async: true
          }
        }).then(this.TDTinstance)
          .then(this.initMap)
      },
      TDTinstance (args) {
        for (let k in args) {
          let name = this.gisModules[k].split('/').pop()
          this.gisConstructor[name] = args[k]
        }
        /* dojo.declare(null, {
          constructor (maptype) {
            this._maptype = maptype
            /!* this.spatialReference = new that.gisConstructor.SpatialReference({wkid: 4326})
            this.initialExtent = (this.fullExtent = new that.gisConstructor.Extent(-180, -90, 180, 90, this.spatialReference))
            this.MapView = new that.gisConstructor.MapView({
              container: 'viewDiv', // Reference to the scene div created in step 5
              map: map, // Reference to the map object created before the scene
              zoom: 4, // Sets zoom level based on level of detail (LOD)
              center: [15, 65] // Sets center point of view using longitude,latitude
            })
            this.tileInfo = new that.gisConstructor.TileInfo(tileInfo) *!/
            this.loaded = true
            this.onLoad(this)
          }
        }) */
      },
      initMap () {
        /* this.gisConstructor.urlUtils.addProxyRule({
          urlPrefix: 'http://113.140.66.226:33225',
          proxyUrl: 'http://127.0.0.1:8001/Java/proxy.jsp'
        }) */
        let layer = new this.gisConstructor.TileLayer({
          // url: "https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer"
          url: 'http://113.140.66.226:33225/arcgis/rest/services/TDTSxBaseMap_XX/MapServer'
        })
        let basemap = new this.gisConstructor.Basemap({
          baseLayers: [layer]
        })
        let map = new this.gisConstructor.Map({
          basemap: basemap
        })
        this.mapview = new this.gisConstructor.MapView({
          container: this.id, // Reference to the scene div created in step 5
          map: map, // Reference to the map object created before the scene
          zoom: 6, // Sets zoom level based on level of detail (LOD)
          center: [109.033, 35.165] // Sets center point of view using longitude,latitude
        })
      }
    }
  }
  </script>
