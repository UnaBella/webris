<template>
  <div class="topbar">
    <div class="wrap">
      <brand class="brand" :data="brandData"></brand>
      <account class="account" :data="accountData"></account>
    </div>
  </div>
</template>

<script>
  import Brand from './TopBar_Brand.vue';
  import Account from './TopBar_Account.vue';

  export default {
    data(){
      return {
        /*
         * url:图片路径
         * title1:中文名
         * title2:英文名
         * */
        brandData: {
          url: '../static/img/logo.png',
          title1: '岱江Saas影像运维平台',
          title2: 'Daijiang Saas image diagnosis platform'
        },
        accountData: {
          name: '欧阳娜娜',
          list: [{text: '账户信息'}, {text: '修改密码'}, {text: '退出　　'}]
        }
      }
    },
    components: {Brand, Account}
  };
</script>

<style lang="less" scoped>

  .topbar {
    box-sizing: border-box;
    height: 56px;
    padding-bottom: 10px;
    .wrap {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }


</style>
