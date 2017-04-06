<template>
  <div id="home">
    <div class="header">
      <top></top>
      <navigation></navigation>
    </div>
    <div class="main">

    </div>
  </div>
</template>

<script>
  import Top from './TopBar.vue';
  import Navigation from './NavBar.vue';
  export default {
    data () {
      return {}
    },
    components: {Top, Navigation}
  }
</script>

<style lang="less" scoped>
#home{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
  .main {
    height: 100%;
    background-image: url(../assets/images/bg.png);
    -webkit-background-size: cover;
    background-size: cover;
  }
</style>
