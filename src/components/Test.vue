<template>
  <div class="container">
    <!--按钮-->
    <button class="btn">default</button>
    <button class="btn" disabled>disabled</button>
    <br><br>
    <!--提示框-->
    <div class="popup">
      <div>
        <i class="iconfont icon-error"></i>
        <span>删除提示</span>
      </div>
      <div>
        <p>我是提示文本</p>
      </div>
      <div>
        <button class="btn-reverse">取消</button>
        <button class="btn">确定</button>
      </div>
    </div>
    <br>
    <!--提示气泡-->
    <div class="bubble">
      <p>我是提示信息</p>
    </div>
    <br>
    <!--表格-->
    <div class="table">
      <div class="left">
      </div>
      <div class="right">
        <table>
          <thead>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
          </tr>
          </thead>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
  import '../assets/libs/jquery1.91.min.js'
  export default {
    data() {
      return {}
    },
    props: [],
    components: {},
    mounted() {
      var leftcan;
      var rightcan;
      $('.s_rightdown').mouseenter(function (event) {    //鼠标穿透事件

        $('.s_rightdown tbody').on('scroll', function () {
          $('.s_leftdown tbody')[0].scrollTop = $('.s_rightdown tbody')[0].scrollTop
          $('.s_rightup tbody')[0].scrollLeft = $('.s_rightdown tbody')[0].scrollLeft
        })
        $('.s_leftdown').unbind('scroll')
      });
      $('.s_leftdown').mouseenter(function (event) {
        $('.s_leftdown tbody').on('scroll', function () {
          $('.s_rightdown tbody')[0].scrollTop = $('.s_leftdown tbody')[0].scrollTop
        })
        $('.s_rightdown tbody').unbind('scroll')
      });
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/stylesheets/base01.less";
  @import "../assets/stylesheets/element.less";

  .container {
    min-height: 100vh;
    padding: 20px;
    padding-bottom: 1000px;
    background-color: #fff;
  }
</style>
