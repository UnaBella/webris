<template>
  <div id="home">
    <div class="header">
      <top-bar></top-bar>
      <nav-bar></nav-bar>
    </div>
    <div class="main">
        <modal title="标题"></modal>
    </div>
  </div>
</template>

<script>
import TopBar from './TopBar.vue';
import NavBar from './NavBar.vue';
import Modal from './Modal.vue';

export default {
  data() {
    return {}
  },
  components: { TopBar, NavBar,Modal },
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
