<template>
  <div id="app">
    <app-header :poiInfo="poiInfo"></app-header>
    <app-nav></app-nav>
    <app-content></app-content>
  </div>
</template>

<script>
import Header from 'components/header/Header'
import Nav from 'components/nav/Nav'
import Content from 'components/content/Content'

export default {
  name: 'app',
  data() {
    return {
      poiInfo: {},
    }
  },
  components: {
    'app-header': Header,
    'app-nav': Nav,
    'app-content': Content,
  },
  created(){
    // axios

    // fetch
    fetch("/api/goods")
      .then(res => {
        return res.json()
      })
      .then(response =>{
        // console.log(response)
        if(response.code == 0){
          // console.log(response.data)
          this.poiInfo = response.data.poi_info
          // console.log(this.poiInfo)
        }
      })
  }
}
</script>

<style>

</style>
