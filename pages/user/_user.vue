<template>
  <v-row justify="center" align="center">
    <div v-if="user">{{user}}</div>
    <button @click="$store.dispatch('goOtherPath',{to:'/'})">goOtherPath</button>
  </v-row>
</template>

<script>

export default {
  async asyncData({payload}) {
    if(payload){
      return {user: payload}
    }
  },
}
</script>
