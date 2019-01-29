<template>
  <section>
    <div class="content">
        <router-link to="/logo">登录</router-link>
    </div>
    <foot/>
  </section>
</template>

<script>
  import foot from './Foot'
  export default {
    name: "Common",
    components:{foot},
    data() {
          return {}
      },
      methods: {}
  }
</script>

<style lang="less" scoped>
  section{
    width: 100%;
    height: 100vh;
    .content{
      width: 100%;
      height: 90vh;
      overflow: hidden;
      overflow-y: scroll;
      &::-webkit-scrollbar{
        display: none;
        width: 0;
        height: 0;
      }
    }
  }
</style>
