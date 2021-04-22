<template>
  <div>
    <p>账号组件 ---  color:red</p>
    <router-link to="/account/login">登录</router-link>
    <router-link to="/account/register">注册</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    div,a,p{
        color: red;
    }
    
</style>