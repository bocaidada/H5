<template>
  <v-touch @swiperight="backPage()" class="reg">
    <mt-header title="注册">
      <mt-button icon="back" slot="left" @click="backPage"></mt-button>
    </mt-header>
    <div class="box">
      <div class="imgLogo">
        <img src="../../../static/img/logo@3x.png" alt="">
      </div>
      <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')"  placeholder="请输入您的手机号" maxlength="11" v-model="regData.mobile">
      <div class="codeBox">
        <input type="text" placeholder="请输入验证码" maxlength="6" v-model="regData.message">
        <v-touch v-if="codeFlag" class="code" @tap="getCode()">获取验证码</v-touch>
        <div v-else class="code">{{codeMsg}}s</div>
      </div>
      <input type="password" placeholder="请设置密码" maxlength="20" v-model="regData.password">
      <v-touch class="loginTap" @tap="submitReg()">注册</v-touch>
      <p class="sin">注册代表同意 <router-link to="/Agreement">《门装宝用户服务协议》</router-link>、<router-link to="">《隐私协议》</router-link></p>
    </div>
  </v-touch>
</template>

<script>
    export default {
        name: "Reg",
        data() {
            return {
              mobileFlag: false,
              passFlag: false,
              codeFlag:true,
              codeMsg: 60,
              regData:{
                mobile:'',
                message:'',
                password:'',
                sessionId:'',
                clientType: 3
              }
            }
        },
        watch: {
          "regData.mobile" (val,old) {
            // console.log(val)
            const reg = /^\d{0,}$/
            if(reg.test(val)){
              if(val.length == 11) {
                const reg1 = /^1[3|4|5|7|8][0-9]\d{8}$/
                if(reg1.test(this.regData.mobile)){
                  this.mobileFlag = true
                }else{
                  this.mobileFlag = false
                  this.message('请填写正确的手机号')
                }
              }else{
                this.mobileFlag = false
              }
            }else{
              this.regData.mobile = this.regData.mobile.substr(0, this.regData.mobile.length-1)
              this.message('此处只能输入数字')
            }
          },
          "regData.message" (val,old) {
            const reg = /^\d{0,}$/
            if(reg.test(this.regData.message)){
            }else{
              this.regData.message = ''
              this.message('此处只能输入数字')
            }
          },
          "regData.password" (val,old) {
            if(val.length > 5) {
              const reg = /^[^\u4E00-\u9FA5\uF900-\uFA2D\u0020]{6,20}$/
              if(reg.test(this.regData.password)){
                this.passFlag = true
              }else{
                this.passFlag = false
                this.message('密码不能包含汉字和空格')
              }
            }else{
              this.passFlag = false
            }
          }
        },
        methods: {
          backPage() {
            this.$router.go(-1)
          },
          message(params) {
            this.$toast({
              message: params,
              position: 'bottom',
            })
          },
          submitReg() {
            if(this.regData.mobile && this.regData.password && this.regData.message) {
              if(this.mobileFlag){
                if(this.passFlag) {
                  this.$router.push('/select_user')


                }else{
                  if(this.regData.password.length <6){
                    this.message('密码不得小于六位')
                  }else{
                    this.message('密码不得包含汉字和空格')
                  }
                }
              }else{
                this.message('请填写正确的11位手机号')
              }
            }else{
              this.message('请完整填写注册信息')
            }
          },
          getCode() {
            if(this.mobileFlag) {
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
              this.message('请填写正确的手机号')
            }
          }
        }
    }
</script>

<style lang="less" scoped>
  @color:#0284FF;

  .reg {
    width: 100%;
    // height: 100vh;
    color: #4A4A4A;
    letter-spacing: 1px;
    font-size: 30px;
    padding-bottom: 50px;
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
      .sin{
        line-height: 40px;
        font-size: 24px;
        text-align: center;
        a{
          color: @color;
        }
      }
    }
  }
</style>
