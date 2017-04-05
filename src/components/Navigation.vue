<template>
  <div class="nav">
    <div class="wrap">
      <ul>
        <li v-for="i in list">{{i}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: ['检查登记', '查询管理', '其他管理', '查询管理', '其他管理', '查询管理', '其他管理'].slice(0, 6)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/stylesheets/base01.less";

  .nav {
    height: 40px;
    background-color: @basec1;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    ul {
      height: 40px;
      li {
        float: left;
        box-sizing: border-box;
        padding: 0 10px;
        margin: 0 30px;
        color: @fc5;
        height: 40px;
        line-height: 40px;
        font-size: @fz2;
        &:hover {
          background-color: darken(@basec1, 9%);
          color: @fc6;
        }
      }
    }
  }

</style>
