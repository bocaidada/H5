<template>
   <div class="selectBox" :style="{background: 'url('+bgImg+') no-repeat center/cover'}">
      <h5>选择用户类型</h5>
     <div class="userBox" :class="{focus:selectNum == 0}" @click="changeNum(0)">
       <img src="../../../static/img/xuanze_logo_01@3x.png" alt="">
       <span>我是装修公司</span>
     </div>
     <div class="userBox" :class="{focus:selectNum == 1}" @click="changeNum(1)">
       <img src="../../../static/img/xuanze_logo_02@2x.png" alt="">
       <span>我是工长</span>
     </div>
     <div class="userBox" :class="{focus:selectNum == 2}" @click="changeNum(2)">
       <img src="../../../static/img/xuanze_logo_03@3x.png" alt="">
       <span>我是技师</span>
     </div>
     <v-touch class="next" @tap="next()">下一步</v-touch>
   </div>
</template>

<script>
    export default {
        name: "Select_user",
        data() {
            return {
              selectNum: 0,
              bgImg:'',
              imgData:[
                {url:'../../../static/img/xuanze_01@2x.png'},
                {url:'../../../static/img/xuanze_02@2x.png'},
                {url:'../../../static/img/xuanze_03@2x.png'}
              ]
            }
        },
        mounted() {
          this.bgImg = this.imgData[0].url
        },
        methods: {
          changeNum(params){
            this.selectNum = params
            if(params == 0) {
              this.bgImg = this.imgData[0].url
            }else if(params == 1) {
              this.bgImg = this.imgData[1].url
              this.$store.commit('userType',2)
            }else{
              this.bgImg = this.imgData[2].url
              this.$store.commit('userType',1)
            }
          },
          next() {
            if(this.selectNum == 0) {
              this.$router.push('/Improve_enterprise')
            }else{
              this.$router.push('/Improve_user')
            }
          }
        }
    }
</script>

<style lang="less" scoped>
  .selectBox{
    width: 100%;
    height: 100%;
    // box-sizing: border-box;
    // background: rgba(0,0,0,.7);
    // background: url() no-repeat center/cover;
    text-align: center;
    font-size: 36px;
    color: #fff;
    padding: 60px 0;
    h5{
      color: #fff;
      margin-bottom: 150px;
    }
    .userBox{
      width: 73%;
      height: 170px;
      line-height: 170px;
      margin: 60px auto;
      border: 2px solid #fff;
      border-radius: 6px;
      text-align: left;
      box-sizing: border-box;
      padding-left: 16%;
      img{
        width: 80px;
        vertical-align: middle;
        margin-right: 15px;
      }
    }
    .focus{
      background: #0284FF;
      border: 2px solid #0284FF;
    }
    .next{
      width: 300px;
      height: 80px;
      line-height: 80px;
      border-radius: 6px;
      background: #0284FF;
      margin: 120px auto 0;
    }
  }
</style>
