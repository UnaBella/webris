<template>
  <div class="account">
    <i class="iconfont icon-user"></i>
    <span>{{data.name}}</span>
    <i class="icon-angle-down"></i>
    <div>
      <ul>
        <li v-for="i in data.list "><a href="#">{{i.text}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: ['data']
  }
</script>

<style lang="less" scoped>
  @import "../assets/stylesheets/base01.less";

  .account {
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding: 10px;
    // 字体图标
    i {
      font-size: 1.8rem;
      display: inline-block;
      transition: 0.2s;
    }
    // 用户名
    span {
      color: @basec1;
      margin-left: 10px;
      margin-right: 6px;
    }
    // 下拉菜单
    div {
      width: calc(100% - 20px);
      position: absolute;
      /*left: 0;*/
      top: 100%;
      box-sizing: border-box;
      background-color: @bgc-td;
      border: 1px solid @basec1;
      border-radius: @borradius1;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      display: none;
      ul {
        li {
          height: 24px;
          line-height: 24px;
          padding: 0 10px;
          text-align: right;
          /*下拉菜单列表项分割线*/
          border-bottom: 1px solid @borc-secsplit;
          &:last-child {
            border: none;
          }
          /*鼠标放上更换颜色*/
          &:hover {
            background-color: @basec1;
            a {
              color: @fc6;
            }
          }
        }
      }
    }
    /*鼠标放上显示下拉菜单*/
    &:hover {
      div {
        display: block;
      }
      /*箭头旋转*/
      i:nth-of-type(2) {
        transform: rotate(180deg);
      }
    }
  }

</style>
