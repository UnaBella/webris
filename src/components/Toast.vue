<template>
  <div>
    <i class="iconfont icon-ok"></i>
    <p>操作成功</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: [],
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/stylesheets/base01.less";

  div {
    display: inline-block;
    padding: 2rem;
    border: 2px solid @fc5;
    border-radius: @borradius2;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    color: @fc5;
    background-color: @basec1;
    i {
      font-size: 3rem;
    }
    p {
      margin-top: 10px;
      font-size: 1.6rem;
    }
  }
</style>
