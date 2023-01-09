<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button type="button" class=""></button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
*{
  margin: 0;
  padding: 0;
}
.background-image{
  background-image: url(https://wallpaperaccess.com/full/813662.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}

</style>
