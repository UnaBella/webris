<template>
  <div class="container">
    <button class="btn">default</button>
    <button class="btn" disabled>disabled</button>
    <br><br>
    <!--<button class="btn-login">send</button>
    <button class="btn-login" disabled>send</button>-->
    <div class="del-popup">
      <!--标题-->
      <div class="header">
        <i class="icon"></i>
        <p class="title">删除提示</p>
      </div>
      <div class="content">
        <p>我是提示文本</p>
      </div>
      <div class="btn-group">
        <!--取消按钮-->
        <button class="btn-reverse">取消</button>
        <!--确定按钮-->
        <button class="btn">确定</button>
      </div>
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
    min-height: 768px;
    padding: 10px;
  }
</style>
