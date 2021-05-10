import Vue from 'Vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps,{
  load:{
    key:'AIzaSyDCBsRksnO5cYdmfUR5rzunpQha0K2QhVM',
    libraries:'places'
  }
})