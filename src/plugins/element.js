import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import '../assets/styles/element-variables.scss';
// import localeEn from 'element-ui/lib/locale/lang/en'; // 英文
import localeZhCn from 'element-ui/lib/locale/lang/zh-CN'; // 中文

Vue.use(Element);
Vue.use(Element, { localeZhCn });
