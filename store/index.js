export const actions ={
  goOtherPath({},{to}){
    $nuxt.$router.push(to)
    console.log('eventClicked')
    console.log(typeof $nuxt.$router.push)
  }
}