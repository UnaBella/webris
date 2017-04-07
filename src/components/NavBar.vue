<template>
  <nav>
    <div class="wrap">
      <ul class="menu">
        <li>1</li>
        <li class="dropdown">2

          <ul class="sub-menu">
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li class="dropdown">
              <a href="#">4</a>
              <ul class="sub-menu">
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
              </ul>
            </li>
            <li><a href="#">5</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  require('../assets/libs/jquery1.91.min.js');
  export default {
    data() {
      return {}
    },
    props: ['data'],
    mounted(){
      $('.dropdown').hover(
        function () {
          $(this).children('.sub-menu').slideDown(100);
        },
        function () {
          $(this).children('.sub-menu').slideUp(100);
        }
      );
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/stylesheets/base01.less";

  nav {
    position: relative;
    height: 40px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    background-color: @basec1;
    li{
      cursor: pointer;
    }
  }

  .menu > li {
    height: 40px;
    line-height: 40px;
    float: left;
    padding: 0 50px;
    position: relative;
    color: #ebebeb;
    &:hover {
      background-color: darken(@basec1, 8%);
      color: @fc6;
    }
  }

  nav li ul {
    border: 1px solid @basec1;
    border-radius: @borradius1;
    background-color: @bgc-td;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 0;
    width: 106px;
  }

  nav li li {
    position: relative;
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
    text-align: center;
    border-bottom: 1px solid @borc-secsplit;
    &:last-child {
      border: none;
    }
    &:hover {
      background-color: @basec1;
    }
  }

  nav li li ul {
    position: absolute;
    top: 0;
    left: 106px;
  }

  ul.sub-menu {
    display: none;
  }

</style>
