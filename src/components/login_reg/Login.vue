<template>
  <div class="logo">
    <mt-header title="登录"></mt-header>
    <div class="imgLogo">
      <img src="../../../static/img/logo@3x.png" alt="">
    </div>
    <div class="title">
      <span :class="{hit:spanFlag}" @click="change(true)">账号登录</span>
      <span :class="{hit:!spanFlag}" @click="change(false)">短信登录</span>
    </div>
    <div class="account" v-if="spanFlag">
      <input type="text" maxlength="11" onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)" onblur="this.v();" v-model="loginData1.mobile" placeholder="请输入您的账号">
      <input type="password" maxlength="20" v-model="loginData1.password" placeholder="请输入密码">
    </div>
    <div class="message" v-if="!spanFlag">
      <input type="text" maxlength="11" onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)" onblur="this.v();" v-model="loginData2.mobile" placeholder="请输入手机号码">
      <div>
        <input type="text" maxlength="6" v-model="loginData2.message" placeholder="请输入验证码">
        <v-touch v-if="codeFlag" class="code" @tap="getCode()">获取验证码</v-touch>
        <div v-else class="code">{{codeMsg}}s</div>
      </div>
    </div>
    <v-touch class="loginTap" @tap="SubLog()">登录</v-touch>
    <p>
      <router-link class="fontPass" to="/Reg">快速注册</router-link>
      <router-link class="forgetPass" to="/Find_pass">找回密码</router-link>
    </p>
    <!--<span class="sign">menzhuangbao</span>-->
  </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
              mobileFlag: false,
              codeFlag: true,
              codeMsg: 60,
              spanFlag: true,
              loginData:{},
              loginData1:{
                mobile:'',
                password:'',
                type: 1
              },
              loginData2:{
                mobile:'',
                message:'',
                sessionId:'',
                type: 2
              }
            }
        },
        mounted() {
          
        },
        watch: {
          "loginData2.mobile" (val,old) {
            const reg = /^\d{0,}$/
            if(reg.test(val)){
              if(val.length == 11) {
                const reg1 = /^1[3|4|5|7|8][0-9]\d{8}$/
                if(reg1.test(this.loginData2.mobile)){
                  this.mobileFlag = true
                }else{
                  this.mobileFlag = false
                  this.message('请填写正确的手机号')
                }
              }else{
                this.mobileFlag = false
              }
            }else{
              this.loginData2.mobile = this.loginData2.mobile.substr(0, this.loginData2.mobile.length-1)
              this.message('此处只能输入数字')
            }
          },
          "loginData2.message" (val,old) {
            const reg = /^\d{0,}$/
            if(reg.test(this.loginData2.message)){
            }else{
              this.loginData2.message = this.loginData2.message.substr(0, this.loginData2.message.length-1)
              this.message('此处只能输入数字')
            }
          },
        },
        methods: {
          message(params) {
            this.$toast({
              message: params,
              position: 'bottom',
            })
          },
          change(params) {
            this.spanFlag = params
          },
          getCode() {
            if(this.mobileFlag){
              this.codeFlag = false
              let num = 60
              let t = setInterval(() => {
                num --
                this.codeMsg = num
                if(num === 0){
                  clearInterval(t)
                  this.codeFlag = true
                }
              },1000)
            }else{
              this.message('请正确填写11位手机号')
            }
          },
          SubLog() {
            if(this.spanFlag) {
              if(this.loginData1.mobile && this.loginData1.password){
                const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
                if (reg.test(this.loginData1.mobile)) {
                  if(this.loginData1.password.length<6){ 
                    this.message('密码不得小于六位')
                  }

                }else{
                  this.message('请填写正确的手机号')
                }  
              }else{
                this.message('请完整填写登录信息')
              }
            }else{
              if(this.loginData2.mobile && this.loginData2.message){
                const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
                if (reg.test(this.loginData2.mobile)) {
                  
                }else{
                  this.message('请填写正确的手机号')
                }  
              }else{
                this.message('请完整填写登录信息')
              }
            }
          }
        }
    }
</script>

<style lang="less" scoped>
  @color:#0284FF;

  .logo{
    width: 100%;
    height: 100vh;
    color: #4A4A4A;
    box-sizing: border-box;
    padding: 0 50px;
    letter-spacing: 1px;
    font-size: 30px;
    position: relative;

    .imgLogo{
      width: 140px;
      height: 140px;
      border-radius: 50%;
      margin: 0 auto 100px;
      // border: 2px solid @color;
      img{
        width: 100%;
      }
    }
    .title{
      width: 100%;
      height: 80px;
      line-height: 80px;
      margin-bottom: 60px;
      span{
        width: 50%;
        height: 100%;
        display: block;
        float: left;
        text-align: center;
        color: #9B9B9B;
        font-weight: 600;
      }
      .hit{
        color: #4A4A4A;
        border-bottom: 6px solid @color;
      }
    }
    .account{
      height: 200px;
      input{
        width: 100%;
        height: 80px;
        background: #F6F6F6;
        margin-bottom: 40px;
        box-sizing: border-box;
        border-radius: 5px;
      }
    }
    .message{
      width: 100%;
      height: 200px;
      input{
        width: 100%;
        display: block;
        margin-bottom: 40px;
        box-sizing: border-box;
        padding: 0 20px;
        border-radius: 5px;
      }
      div{
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
          box-sizing: border-box;
          border: 2px solid @color;
          border-radius: 5px;
          line-height: 76px;
        }
      }
    }
    .loginTap{
      margin: 60px 0 20px;
      height: 80px;
      line-height: 80px;
      width: 100%;
      background: @color;
      color: #fff;
      font-size: 36px;
      text-align: center;
      border-radius: 5px;
    }
    p{
      line-height: 40px;
      height: 40px;
      font-size: 24px;
      color: #999;
      .fontPass{
        float: left;
      }
      .forgetPass{
        float: right;
      }
    }
    .sign{
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 24px;
      color: #999;
    }
  }
</style>
