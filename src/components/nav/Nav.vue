<template>
  <div class="nav">
    <router-link to="/goods" class="nav-item">美食
      <div class="line"></div>
    </router-link>
    <router-link to="/comments" class="nav-item">评价
      <div class="line"></div>
    </router-link>
    <router-link to="/sellers" class="nav-item">商家
      <div class="line"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style lang="less" scoped>
.nav {
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-item {
  flex: 1;
  text-align: center;
  text-decoration: none;
  position: relative;
}
.nav .active{
  color: #ffbb22;
  .line {
    position: absolute;
    bottom: 0;
    width: 40px;
    height: 2px;
    background: #ffbb22;
    left: 50%;
    margin-left: -20px;
  }
}
</style>