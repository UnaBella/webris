<template>
  <div class="navbar">
    <div class="wrap">
      <ul class="level1">
        <li><span>level1</span>
        </li>
        <li>
          <span>level1</span>
        </li>
        <li>
          <span>level1</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
@import "../assets/stylesheets/base01.less";

.navbar {
  height: 40px;
  background-color: @basec1;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  .level1 {
    height: 40px;
  }
  .level1>li {
    float: left;
    box-sizing: border-box;
    padding: 0 10px;
    margin: 0 30px;
    color: @fc5;
    height: 40px;
    line-height: 40px;
    font-size: @fz2;
    position: relative;
    &:hover {
      background-color: darken(@basec1, 9%);
      color: @fc6;
      cursor: pointer;
    }
    div {
      position: absolute;
      color: #000;
    }
  }
}
</style>
