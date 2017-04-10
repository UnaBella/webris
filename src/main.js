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

var el = document.getElementsByTagName("html")[0];
var w;
var mw = 1024;
var mfz = 10;
update();
window.onresize = update;
function update() {
  w = innerWidth;
  el.style.fontSize = w / (mw / mfz) + "px";
}
