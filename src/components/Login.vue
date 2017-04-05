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
            <span class="icon-user-md"></span>
            <input id="username" type="text" placeholder="请输入用户名">
          </label>
          <br>
          <label for="password">
            <span class="icon-lock"></span>
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
      height: 46rem;
      width: 86rem;
      background-color: @fc6;
      opacity: 0.86;
      border-radius: 2rem;
      box-shadow: 0 0 5rem rgba(0, 0, 0, 0.1);
      z-index: 999;
      .leftpanel {
        width: 50%;
        height: 100%;
        float: left;
        border-radius: 2rem 0 0 2rem;
        background-image: url('../assets/images/left-bg.png');
        -webkit-background-size: 100% auto;
        background-size: 100% auto;
        p {
          margin: 0 0 0 4.5rem;
          &:nth-of-type(1) {
            margin-top: 13.4rem;
            font-size: 2.8rem;
            color: @fc6;
          }
          &:nth-of-type(2) {
            font-size: 2.8rem;
            color: @fc6;
            margin-top: 1.2rem;
          }
          &:nth-of-type(3) {
            /*font-family: 'Arial Regular', serif;*/
            font-size: @fz2;
            color: @fc6;
            margin-top: 2.8rem;
          }
        }
      }
      .rightpanel {
        float: left;
        width: 50%;
        height: 100%;
        border-radius: 0 2rem 2rem 0;
        form {
          width: 26.2rem;
          margin-top: 11.2rem;
          margin-left: 8.4rem;
          label {
            position: relative;
          }
          span {
            position: absolute;
            color: @fc1;
            margin-top: .7rem;
            margin-left: 1rem;
          }
          input {
            width: 100%;
            height: 2.8rem;
            border: 1px solid #999;
            border-radius: @borradius1;
            box-sizing: border-box;
            margin-bottom: 1.8rem;
            padding-left: 2.8rem;
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
            height: 3.2rem;
            background-color: @basec1;
            border: none;
            border-radius: @borradius1;
            color: @fc6;
            margin-top: 12.4rem;
            box-shadow: 0 .1rem .2rem rgba(0, 0, 0, 0.2);
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
    bottom: 4rem;
    min-width: 30rem;
    text-align: center;
    font-size: @fz4;
    color: @fc6;
  }
</style>
