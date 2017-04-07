<template>
  <nav>
    <div class="wrap">
      <ul class="menu">
        <li>1</li>
        <li class="dropdown">2



          <ul class="sub-menu">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li class="dropdown">4


              <ul class="sub-menu">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </li>
            <li>5</li>
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
          $(this).children('.sub-menu').show();
        },
        function () {
          $(this).children('.sub-menu').hide();
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
    li {
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
    color: @fc1;
    &:last-child {
      border: none;
    }
    &:hover {
      background-color: @basec1;
      color: @fc6;
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
