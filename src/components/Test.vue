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
    <!--提示信息-->
    <div class="bubble">
      <p>我是提示信息</p>
    </div>
    <br>


    <div class="table">



    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: [],
    components: {},
    mounted() {
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/stylesheets/base01.less";
  @import "../assets/stylesheets/element.less";

  .container {
    min-height: 100vh;
    padding: 20px;
    background-color: #fff;
  }
</style>
