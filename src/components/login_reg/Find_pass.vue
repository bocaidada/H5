<template>
  <v-touch @swiperight="backPage()" class="reg">
    <mt-header title="找回密码">
      <mt-button icon="back" slot="left" @click="backPage"></mt-button>
    </mt-header>
    <div class="box">
      <div class="imgLogo">
        <img src="../../../static/img/logo@3x.png" alt="">
      </div>
      <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="请输入您的手机号" maxlength="11" v-model="regData.mobile">
      <div class="codeBox">
        <input type="text" placeholder="请输入验证码" maxlength="6" v-model="regData.message">
        <div class="code">获取验证码</div>
      </div>
      <input type="password" placeholder="请设置密码" maxlength="20" v-model="regData.password">
      <v-touch class="loginTap" @tap="submitReg()">确认</v-touch>
    </div>
  </v-touch>
</template>

<script>
  export default {
    name: "Find_pass",
    data() {
      return {
        regData:{
          mobile:'',
          message:'',
          password:'',
          sessionId:'',
          clientType: 3
        }
      }
    },
    methods: {
      backPage() {
        this.$router.go(-1)
      },
      submitReg() {
        this.$messageBox.alert('请牢记您的账号和重新设置的登录密码','重设密码成功').then(()=>{
          
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  @color:#0284FF;

  .reg {
    width: 100%;
    height: 100vh;
    color: #4A4A4A;
    letter-spacing: 1px;
    font-size: 30px;
    .box{
      width: 100%;
      box-sizing: border-box;
      padding: 0 50px;
      .imgLogo {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        margin: 0 auto 100px;
        // border: 2px solid @color;
        img{
          width: 100%;
        }
      }
      input{
        margin-bottom: 40px;
      }
      .codeBox{
        width: 100%;
        height: 80px;
        line-height: 80px;
        input{
          width: 56%;
          float: left;
        }
        .code{
          width: 36%;
          height: 100%;
          float: right;
          text-align: center;
          color: @color;
          border: 2px solid @color;
          border-radius: 5px;
          box-sizing: border-box;
          line-height: 76px;
        }
      }
    }

  }
</style>
