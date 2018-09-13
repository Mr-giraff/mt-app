<template>
  <div id="app">
    <app-header></app-header>
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
  components: {
    'app-header': Header,
    'app-nav': Nav,
    'app-content': Content,
  },
}
</script>

<style>

</style>
