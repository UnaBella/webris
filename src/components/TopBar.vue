<template>
  <div class="topbar">
    <div class="wrap">
      <brand class="brand"
             :data="brandData"></brand>
      <account class="account"
               :data="accountData"></account>
    </div>
  </div>
</template>

<script>
  import Brand from './TopBar_Brand.vue';
  import Account from './TopBar_Account.vue';

  export default {
    data() {
      return {
        brandData: {
          name1: '岱江Saas影像运维平台',
          name2: 'Daijiang Saas image Maintanance platform'
        },
        accountData: {
          name: 'ZXJ',
          menus: [{text: '账户信息'}, {text: '修改密码'}, {text: '退出　　'}]
        }
      }
    },
    components: {Brand, Account}
  };
</script>

<style lang="less" scoped>
  .topbar {
    height: 56px;
    .wrap {
      padding: 0 10px 10px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
</style>
