<template>
  <div id="home">
    <div class="header">
      <top-bar></top-bar>
      <nav-bar :data=menus></nav-bar>
    </div>
    <div class="main">

    </div>
  </div>
</template>

<script>
  import TopBar from './TopBar.vue';
  import NavBar from './NavBar.vue';
  export default {
    data () {
      return {
        menus: [
          {
            text: '1',
            subMenus: [
              {
                text: '2',
              }
            ]
          },
        ]
      }
    },
    components: {TopBar, NavBar},
  }
</script>

<style lang="less" scoped>
  #home {
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
