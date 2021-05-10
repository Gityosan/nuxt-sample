<template>
  <div>
    <nuxt-link to="/user/path1/">path1</nuxt-link>
      <button @click="$store.dispatch('goOtherPath',{to:'/user/path1/'})">goOtherPath</button>
    <nuxt-link to="/user/path2/">path2</nuxt-link>
    <nuxt-link to="/user/path3/">path3</nuxt-link><br>
    <nuxt-link to="/path1/userInfo/">path1</nuxt-link>
    <nuxt-link to="/path2/userInfo/">path2</nuxt-link>
    <nuxt-link to="/path3/userInfo/">path3</nuxt-link><br>
    <nuxt-link to="/path1/userSetting/">path1</nuxt-link>
    <nuxt-link to="/path2/userSetting/">path2</nuxt-link>
    <nuxt-link to="/path3/userSetting/">path3</nuxt-link>
    <v-btn @click="getLocation">getLocation</v-btn>
    <v-btn @click="reverseGeolocation">reverseGeolocation</v-btn>
    <v-btn @click="isRed = !isRed">changeClass</v-btn>
    <p :class="isRed?'red':'white'">bindClass</p>
    <p>{{latitude}}</p>
    <p>{{longitude}}</p>
    <p>{{result}}</p>
    <p>{{isRed}}</p>
    <!-- <p>{{payLoad}}</p> -->
    <p>{{$route.fullPath}}</p>
    <p>{{jsonResult}}</p>
    <p>{{status}}</p>
    <!-- <div v-for="i in 3" :key="i">
      {{i}}
    </div>
    <div v-for="( i, index ) in array" :key="i">
      {{i}}{{index}}
    </div> -->
  </div>
</template>
<style lang="scss" scoped>
.red{
  color: red;
  background-color: rgb(121, 121, 121)!important;
  font-size: 50px;
}
.white{
  color: white;
  background-color: rgb(121, 121, 121)!important;
  font-size: 50px;
}
</style>
<script>

export default {
  head:{
    script:[
      {src:'https://maps.googleapis.com/maps/api/js?key=AIzaSyACVtoh-zaaPL5z0iO16T7-wH5XAKbOkhQ&language=ja&sensor=false'}
    ]
  },
  data () {
    return {
      isRed:true,
      latitude: 0,
      longitude: 0,
      result: {},
      geocoder:{},
      path:'',
      array:["a","b","c"],
      jsonResult:{},
      status:false,
    }
  },
  // async asyncData({payload}) {
  //   return {payLoad: payload}
  // },
  async mounted(){
      const script = function (p5) {
        var speed = 2;
        var posX = 0;
        p5.setup = _ => {
          p5.createCanvas(500, 500);
          p5.ellipse(p5.width / 2, p5.height / 2, 500, 500);
        }

        p5.draw = _ => {
          p5.background(0);
          const degree = p5.frameCount * 3;
          const y = p5.sin(p5.radians(degree)) * 50;
          p5.push();
          p5.translate(0, p5.height / 2);
          p5.ellipse(posX, y, 50, 50);
          p5.pop();

          posX += speed;
          if (posX > p5.width || posX < 0) {
            speed *= -1;
          }
        }
      }
      const P5 = require('p5')
      new P5(script)
      const url = 'https://script.google.com/macros/s/AKfycbz2ZILu-1HnAQ2odVsdyp9Z8wk3HYRzvAb44m4Slph06lL3k3piXMULJsdf2YBQLznQ/exec'
      const fixedUrl = url + '?ClinicName=サンプル&Password=sample'
      // await fetch(fixedUrl,{mode:'cors'})
      // .then(res => res.json())
      // .then(
      // result => {
      //  console.log(result)
      //  this.jsonResult = result
      // }).catch((error)=>{
      //  console.log("errorです:"+error)
      // })
      await this.$axios.get('/api',{
        crossDomain:true,
        params:{
          ClinicName:'サンプル2',
          Password:'sample2'
        }
      }).then((result)=>{
        console.log("result")
        console.log(result)
        this.jsonResult = result
        this.status = result.data.data.status
      }).catch((error)=>{
        console.log(error)
        console.log(error.message)
        console.log(error.request)
        this.jsonResult = error})
  },
  methods: {
    getLocation(){
      if (process.client) {
       if (!navigator.geolocation) {
         alert('現在地情報を取得できませんでした。お使いのブラウザでは現在地情報を利用できない可能性があります。エリアを入力してください。')
         return
       }

       const options = {
         enableHighAccuracy: false,
         timeout: 5000,
         maximumAge: 0
       }

       navigator.geolocation.getCurrentPosition(this.success, this.error, options)
     }
   },

   success (position) {
     this.latitude = position.coords.latitude
     this.longitude = position.coords.longitude
   },

   error (error) {
     switch (error.code) {
       case 1: //PERMISSION_DENIED
         alert('位置情報の利用が許可されていませんよ')
         break
       case 2: //POSITION_UNAVAILABLE
         alert('現在位置が取得できませんでした')
         break
       case 3: //TIMEOUT
         alert('タイムアウトになりました')
         break
       default:
         alert('現在位置が取得できませんでした')
         break
     }
    },
    reverseGeolocation(){
      this.geocoder = new google.maps.Geocoder()
      this.geocoder.geocode({
        location:{lat:this.latitude,lng:this.longitude}
      },(results,status)=>{
        if(status === google.maps.GeocoderStatus.OK) {
          console.log('success!')
          // this.result = JSON.parse(results[1])
          this.result = results[1].formatted_address
        }else{
          this.result = status
          console.log(status)
          
        }
      })
      console.log('finish')
    }
  }
}
</script>
