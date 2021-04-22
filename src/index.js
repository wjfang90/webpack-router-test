// 这是 main.js 是我们项目的JS入口文件

import './css/index.scss';// 使用 import 语法，导入 sass样式表

// 在webpack 中尝试使用 Vue：
// 注意： 在 webpack 中， 使用 import Vue from 'vue' 导入的 Vue 构造函数，功能不完整，只提供了 runtime-only 的方式，并没有提供 像网页中那样的使用方式；
import Vue from 'vue';//在webpack.confnig.js文件中配置导入包的别名，修改默认vue文件路径

//导入VueRouter
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// import Vue from '../node_modules/vue/dist/vue.js';
// 回顾 包的查找规则：
// 1. 找 项目根目录中有没有 node_modules 的文件夹
// 2. 在 node_modules 中 根据包名，找对应的 vue 文件夹
// 3. 在 vue 文件夹中，找 一个叫做 package.json 的包配置文件
// 4. 在 package.json 文件中，查找 一个 main 属性【main属性指定了这个包在被加载时候，的入口文件】


// 1. 导入 login 组件
import mainApp from './app.vue'; //默认，webpack 无法打包 .vue 文件，需要安装 相关的loader： 

// 导入 自定义路由模块
import router from './router.js';


var vm = new Vue({
    el: '#app',
    render: c => c(mainApp),// render 会把 el 指定的容器中，所有的内容都清空覆盖，所以 不要 把 路由的 router-view 和 router-link 直接写到 el 所控制的元素中
    router // 注意： App 这个组件，是通过 VM 实例的 render 函数，渲染出来的， render 函数如果要渲染 组件， 渲染出来的组件，只能放到 el: '#app' 所指定的 元素中；
})



