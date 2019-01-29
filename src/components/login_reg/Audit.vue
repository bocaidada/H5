<template>
    <div class="audit">
        <mt-header title="审核状态">
            <mt-button icon="back" slot="left" @click="backPage"></mt-button>
        </mt-header>
        <div>
            <p>企业信息审核中...</p>
            <span>审核会在1-2工作日内结束，请耐心等待</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Audit",
        data() {
            return {}
        },
        methods: {
            backPage() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="less" scoped>
    .audit{
       width: 100%; 
       position: relative; 
       text-align: center; 
       div{
           width: 100%;
        //    position: absolute;
           text-align: center;
           margin: 450px auto 0;
           p{
               line-height: 80px;
               font-size: 36px;
               color: #4A4A4A;
           }
           span{
               display: block;
               text-align: center;
               font-size: 24px;
               color: #7D7D7D;
               line-height: 40px;
           }
       }
    }
</style>
