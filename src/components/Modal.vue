<template>
  <!--遮罩-->
  <div class="cover">
    <!--弹窗-->
    <div class="popup">
      <div class="title">{{title}}</div>
    </div>
  </div>
</template>

<script>
  var startDrag = require('../assets/libs/drag.min.js');
  export default {
    data() {
      return {}
    },
    props: ['title'],
    mounted() {
      startDrag(document.getElementsByClassName('title')[0], document.getElementsByClassName('popup')[0]);
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/stylesheets/base01.less";

  .cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    .popup {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: @borradius2;
      border: 1px solid @borc-popup;
      background-color: @bgc-popup;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      width: 500px;
      height: 500px;
      .title {
        height: 50px;
        border-bottom: 1px solid @borc-popup;
        border-radius: @borradius2 @borradius2 0 0;
        background-color: @bgc-popup-head;
        padding: 0 20px;
        cursor: move;
        line-height: 50px;
      }
    }
  }
</style>
