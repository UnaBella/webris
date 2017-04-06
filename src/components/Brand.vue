<template>
  <div class="brand">
    <img class="logo" src='../assets/images/logo.png' alt="logo">
    <div class="name">
      <h2>{{data.title1}}</h2>
      <h2>{{data.title2}}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: ['data']
  }
</script>

<style lang="less" scoped>
  @import "../assets/stylesheets/base01.less";

  .brand {
    height: 34px;
    display: inline-block;
    .logo {
      height: 100%;
      float: left;
      margin-right: 10px;
    }
    .name {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      h2 {
        margin: 0;
        &:first-child {
          font-size: 1.6rem;
        }
        &:last-child {
          color: @fcbase;
          font-family: Arial, serif;
          font-size: 1.4rem;
        }
      }
    }
  }
</style>
