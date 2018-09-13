<template>
  <div>Goods</div>
</template>

<script>
export default {
  name: "goods",
  created() {
    fetch('/api/goods')
      .then(res => {
        return res.json()
      })
      .then(response => {
        console.log(response)
      })
  }
}
</script>

<style scoped>

</style>