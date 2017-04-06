//引入公共样式
import './assets/stylesheets/reset01.css';
//引入字体图标库
import  './assets/libs/Font-Awesome-3.2.1/css/font-awesome.min.css';
import './assets/libs/iconfont/iconfont.css';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
