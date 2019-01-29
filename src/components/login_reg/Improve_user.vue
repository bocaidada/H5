<template>
    <div class="improve">
        <van-popup v-model="show" position="bottom" :overlay="true">
            <!-- <h1></h1> -->
            <van-area :area-list="areaList" @confirm="onConfirm" @cancel="onCancel"/>
        </van-popup>
        <mt-header title="完善用户信息">
            <mt-button icon="back" slot="left" @click="backPage"></mt-button>
        </mt-header>
        <div class="box">
            <div class="list">
                <span class="iconfont icon-user"></span>
                <input type="text" v-model="improveData.name" maxlength="16" placeholder="请输入用户姓名">
            </div>
            <div class="list">
                <span class="iconfont icon-tel"></span>
                <input type="text" v-model="improveData.contactNo" maxlength="11" placeholder="请输入联系方式">
            </div>
            <div class="list">
                <span class="iconfont icon-email"></span>
                <input type="text" v-model="improveData.cardNo" maxlength="18" placeholder="请输入身份证号码">
            </div>
            <div class="list" @click="selectArea()">
                <span class="iconfont icon-dizhi-01"></span>
                <input type="text" v-model="improveData.address" disabled placeholder="选择 省/市/区">
            </div>
            <div class="list">
                <span class="iconfont icon-xunhuan"></span>
                <input type="text" v-model="improveData.actionArea" placeholder="请选择安装服务区域">
            </div>
            <div class="up_img">
                <img v-if="imgFlag" class="img" :src="imgUrl" alt="">
                <input class="upLoad" accept=“image/*” type="file" name="image" @change="upImgChange($event,1)">
                <img class="eg" src="../../../static/img/shenfen_01@2x.png" alt="">    
                <span class="up">（例图）</span>
                <p class="iconfont icon--jia"></p>
                <span class="up">上传营业执照</span>
            </div>
            <div class="up_img up_imgs">
                <img v-if="imgFlags" class="img" :src="imgUrls" alt="">
                <input class="upLoad" accept=“image/*” type="file" name="image" @change="upImgChange($event,2)">
                <img class="eg" src="../../../static/img/shenfen_02@2x.png" alt="">    
                <span class="up">（例图）</span>
                <p class="iconfont icon--jia"></p>
                <span class="up">上传营业执照</span>
            </div>
            <span class="hit">拍照请尽量降低反光,请确保身份证图片所有信息清晰可见,内容真实有效,无任何修改,文件大小不超过8M。</span>
            <v-touch v-if="subFlag" class="loginTap loginTaps">提交审核</v-touch>
            <v-touch v-else class="loginTap" @tap="subCheck()">提交审核</v-touch>
            <p class="sin">确认上传信息无误并同意 <router-link to="">《信息完善协议》</router-link></p>
        </div>
    </div>
</template>

<script>
    import { Popup,Area  } from 'vant'
    export default {
        name: "Improve_user",
        components: {[Popup.name]: Popup,[Area.name]: Area},
        data() {
            return {
                areaList:{
                    province_list: {
                        110000: '北京市',
                        120000: '天津市'
                    },
                    city_list: {
                        110100: '北京市',
                        110200: '县',
                        120100: '天津市',
                        120200: '县'
                    },
                    county_list: {
                        110101: '东城区',
                        110102: '西城区',
                        110105: '朝阳区',
                        110106: '丰台区',
                        120101: '和平区',
                        120102: '河东区',
                        120103: '河西区',
                        120104: '南开区',
                        120105: '河北区',
                        // ....
                    }
                },
                show:false,
                imgFlag: false,
                imgFlags: false,
                imgUrl:'',
                imgUrls:'',
                subFlag: true,
                improveData: {
                    name:'',
                    type: this.$store.state.userType,             //账户类型 1：技师 2：包工头
                    contactNo:'',           //联系方式
                    address:'',             //居住地址
                    cardNo:'',              //身份证
                    actionArea:'',          //工作区域
                    positiveCardImg:'',  //身份证正面照
                    // negativeCardImg:''   //身份证反面照
                }
            }
        },
        mounted() {
            
        },
        watch: {
            improveData: {
                deep: true,
                handler (val,old){
                    // console.log(val)
                    let i = 0
                    for(let item in val) {                        
                        if(val[item] != ""){
                            i++
                        }
                    }
                    if(i == Object.keys(val).length) {
                        this.subFlag = false
                    }else{
                        this.subFlag = true
                    }
                }
            },
            "improveData.contactNo" (val,old) {
                // console.log(val)
                const reg = /^\d{0,}$/
                if(reg.test(this.improveData.contactNo)){

                }else{
                    this.improveData.contactNo = this.improveData.contactNo.substr(0, this.improveData.contactNo.length-1)
                    this.$toast({
                        message: '此处只能输入数字',
                        position: 'bottom'
                    })
                }
            }
        },
        methods: {
            backPage() {
                this.$router.go(-1)
            },
            //打开区域选择器
            selectArea(){
                this.show = true
            },
            subCheck() {
                
            },
            onConfirm(val,index) {
                console.log(val)
                this.show = false
                this.improveData.address = val[0].name + '/' +  val[1].name + '/' + val[2].name
            },
            onCancel() {
                this.show = false
            },
            upImgChange(e,type) {
                let types = type
                const file = e.target.files[0];
                const imgMasSize = 1024 * 1024 * 8; // 8MB
                console.log(file)
                let _this = this

                // 检查文件类型
                if(['jpeg', 'png', 'gif', 'jpg'].indexOf(file.type.split("/")[1]) < 0){
                    // 自定义报错方式
                    // Toast.error("文件类型仅支持 jpeg/png/gif！", 2000, undefined, false);
                    return;
                }

                // 文件大小限制
                if(file.size > imgMasSize ) {
                    // 文件大小自定义限制
                    // Toast.error("文件大小不能超过10MB！", 2000, undefined, false);
                    this.message('图片不能超过8M')
                    return;
                }

                // 图片预览
                if(file) {
                    if (!e || !window.FileReader) return  // 看支持不支持FileReader
                    let reader = new FileReader()
                    reader.readAsDataURL(file) // 这里是最关键的一步，转换就在这里
                    reader.onloadend = function(){
                        if(types == 1) {
                            _this.improveData.positiveCardImg = '11'
                            _this.imgUrl = this.result
                            console.log(this.result)
                            _this.imgFlag = true
                        }else{
                            _this.imgUrls = this.result
                            console.log(this.result)
                            _this.imgFlags = true
                        }
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .improve{
         .box{
            width: 100%;
            margin-top:110px; 
            box-sizing: border-box;
            padding: 0 50px 50px;
            .list{
                width: 100%;
                height: 80px;
                line-height: 80px;
                border-bottom: 2px solid #E6E6E6; 
                margin-bottom: 40px;
                color: #0284FF;
                span{
                    color: #0284FF;
                    text-align: center;
                    font-weight: 600;
                    display: block;
                    width: 10%;
                    height: 100%;
                    float: left;
                }
                input{
                    width: 90%;
                    float: right;
                    background: none;
                }
            }
            .up_img{
                width: 100%;
                height: 340px;
                border: 2px solid #0284FF;
                border-radius: 6px;
                margin: 60px 0;
                padding: 20px 0;
                text-align: center;
                box-sizing: border-box;
                position: relative;
                overflow: hidden;
                .img{
                    height: 91%;
                    position: absolute;
                    z-index: 10;
                    left: 50%;
                    transform: translateX(-50%);
                    top: 20px;
                }
                .upLoad{
                    position: absolute;
                    left: 10%;
                    bottom: 10%;
                    width: 500px;
                    height: 300px;
                    opacity: 0;
                }
                .eg{
                   width: 40%;      
                }
                .up{
                    display: block;
                    font-size: 24px;
                    color: #9B9B9B;
                }
                .iconfont{
                   font-size: 42px; 
                   line-height:70px;
                   color: #666;
                }
            }
            .up_imgs{
                margin: 60px 0 20px;
            }
            .hit{
                display: block;
                color: #9B9B9B;
                font-size: 24px;
                text-align: left;
            }
            .sin{  
                margin-bottom: 80px;
                line-height: 40px;
                font-size: 24px;
                text-align: center;
                a{
                    color: #0284FF;
                }
            }
            .loginTaps{
                background: #999;    
            }
        }
    }
</style>
