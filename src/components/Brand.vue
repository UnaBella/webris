<template>
  <div class="brand">
    <img src='../assets/images/logo.png' alt="logo">
    <div class="sub-box">
      <h2>{{data.title1}}</h2>
      <h2>{{data.title2}}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'brand',
    data() {
      return {}
    },
    props: ['data']
  }
</script>

<style lang="less" scoped>
  @import "../assets/stylesheets/base01.less";

  .wrap {
    background-color: red;
  }

  .brand {
    height: 34px;
    display: inline-block;
    img {
      height: 100%;
      float: left;
      margin-right: 10px;
    }
    .sub-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      h2 {
        margin: 0;
        &:first-child {
          font-size: 16px;
        }
        &:last-child {
          color: @fcbase;
          font-family: Arial, serif;
          font-size: 12px;
        }
      }
    }
  }
</style>
