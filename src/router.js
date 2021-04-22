

import VueRouter from 'vue-router';

// 导入 Account 组件
import account from './components/account.vue';
// 导入 datalist 组件
import datalist from './components/datalist.vue';

// 导入Account的两个子组件
import login from './components/subcomps/login.vue';
import register from './components/subcomps/register.vue';

// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        {
            path: '/account', 
            component: account,
            children: [
                { path: 'login', component: login },
                { path: 'register', component: register }
            ]
        },
        { path: '/datalist', component: datalist }
    ]
})

// 把路由对象暴露出去
export default router;