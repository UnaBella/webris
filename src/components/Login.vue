<template>
  <div class="wrapper">
    <!--粒子背景动画-->
    <div class="particleground"></div>
    <div class="outerpanel">
      <div class="leftpanel">
        <p>欢迎使用</p>
        <p>岱江Saas影像诊断平台</p>
        <p>Welcome to Daijiang Saas Imaging<br>Diagnostic Platform</p>
      </div>
      <div class="rightpanel">
        <form action="javascript:void(0)">
          <label for="username">
            <i class="icon-user-md"></i>
            <input id="username" type="text" placeholder="请输入用户名">
          </label>
          <br>
          <label for="password">
            <i class="icon-lock"></i>
            <input id="password" type="text" placeholder="请输入密码">
          </label>
          <button>登录</button>
        </form>
      </div>
    </div>
    <p class="copyright">&copy;2012杭州岱江信息技术科技有限公司</p>
  </div>
</template>

<script>
  require('../assets/libs/jquery1.91.min.js');
  require('../assets/libs/jquery.particleground.js');

  export default {
    data(){
      return {}
    },
    mounted(){
      $('.particleground').particleground({
        dotColor: '#d3efe1',
        lineColor: '#d3efe1'
      });
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/stylesheets/base01.less";

  .particleground {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .wrapper {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: -webkit-gradient(linear, 20% 100%, 100% 0%, from(#46c6ac), to(#8cd4ac));
    .outerpanel {
      height: 460px;
      width: 860px;
      background-color: @fc6;
      opacity: 0.86;
      border-radius: 20px;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
      z-index: 999;
      .leftpanel {
        width: 50%;
        height: 100%;
        float: left;
        border-radius: 20px 0 0 20px;
        background-image: url('../assets/images/left-bg.png');
        -webkit-background-size: 100% auto;
        background-size: 100% auto;
        p {
          margin: 0 0 0 45px;
          &:nth-of-type(1) {
            margin-top: 134px;
            font-size: 2.8rem;
            color: @fc6;
          }
          &:nth-of-type(2) {
            font-size: 2.8rem;
            color: @fc6;
            margin-top: 12px;
          }
          &:nth-of-type(3) {
            /*font-family: 'Arial Regular', serif;*/
            font-size: @fz2;
            color: @fc6;
            margin-top: 28px;
          }
        }
      }
      .rightpanel {
        float: left;
        width: 50%;
        height: 100%;
        border-radius: 0 20px 20px 0;
        form {
          width: 262px;
          margin-top: 112px;
          margin-left: 84px;
          label {
            position: relative;
          }
          i {
            position: absolute;
            color: @fc1;
            margin-top: 7px;
            margin-left: 10px;
          }
          input {
            width: 100%;
            height: 28px;
            border: 1px solid #999;
            border-radius: @borradius1;
            box-sizing: border-box;
            margin-bottom: 18px;
            padding-left: 28px;
            color: @fc1;
            &:focus {
              border-color: @basec1;
            }
            &:hover {
              border-color: @basec1;
            }
          }
          button {
            width: 100%;
            height: 32px;
            background-color: @basec1;
            border: none;
            border-radius: @borradius1;
            color: @fc6;
            margin-top: 124px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
            &:hover {
              background-color: darken(@basec1, 5%);
            }
            &:active {
              background-color: darken(@basec1, 8%);
            }
          }
        }
      }
    }
  }

  .copyright {
    position: absolute;
    bottom: 40px;
    min-width: 300px;
    text-align: center;
    font-size: @fz4;
    color: @fc6;
  }
</style>
