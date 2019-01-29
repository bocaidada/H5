<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: "App",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style>
  body,html,h1,h2,h3,h4,h5,h6,p,img,ul,li,dl,dd,dt,a,ol,input{
    margin: 0;
    padding: 0;
  }
  li{
    list-style-type: none;
  }
  a{
    text-decoration: none;
    color: #4A4A4A;
  }
  #app{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    overflow-y: scroll;
    color: #4A4A4A;
    -webkit-overflow-scrolling:touch;
  }
  #app::-webkit-scrollbar,body::-webkit-scrollbar{
    width: 0;
    height: 0;
    display: none;
  }
  input{
    width: 100%;
    display: block;
    height: 80px;
    border: none;
    outline: none;
    border-radius: 5px;
    background: #f6f6f6;
    box-sizing: border-box;
    padding: 0 20px;
    font-size: 28px;
  }
  .mint-header{
    font-size: 36px;
    padding: 60px 40px 0;
    height: 80px;
    line-height: 80px;
    text-align: center;
    margin-bottom: 60px;
    color: #4A4A4A;
    background: none;
  }
  .mint-header .mint-button{
    height: 100%
  }
  .mint-header-title{
    font-weight: 600 ;
  }
  .mintui{
    font-size: 36px !important;
  }
  .loginTap{
      margin: 60px 0 20px;
      height: 80px;
      line-height: 80px;
      width: 100%;
      background: #0284FF;
      color: #fff;
      font-size: 36px;
      text-align: center;
      border-radius: 5px;
    }
  .mint-msgbox{
    width: 70%;
    border-radius: 8px;
  }
  .mint-msgbox-title{
    line-height: 60px;
    font-size: 32px;
  }
  .mint-msgbox-message{
    line-height: 72px;
    font-size: 28px;
  }
  .mint-msgbox-confirm{
    font-size: 32px;
  }
  .mint-msgbox-btns{
    height: 80px;
    line-height: 80px;
    font-size: 32px;
  }
  .mint-toast-text{
    font-size: 28px;
  }
  .van-picker{
    width: 100%;
    box-sizing: border-box;
    padding: 0 30px;
  }
  .van-picker-column{
    font-size: 32px !important;
  }
  .van-picker__toolbar{
    line-height: 100px !important;
    height: 100px !important;
  }
  .van-picker__cancel, .van-picker__confirm{
    font-size: 32px !important;
  }
</style>
