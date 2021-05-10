<template>
  <v-row justify="center" align="center">
      {{user}}
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
