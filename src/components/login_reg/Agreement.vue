<template>
    <div class="agreement">
        <mt-header title="协议">
            <mt-button icon="back" slot="left" @click="backPage"></mt-button>
        </mt-header>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. 
        </div>
    </div>
</template>

<script>
    export default {
        name: "Agreement",
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
    .agreement{
       width: 100%; 
       text-align: center; 
       div{
          width: 100%;
          box-sizing: border-box;
          padding: 40px;
          font-size: 30px;
          line-height: 45px;
          color: #4A4A4A;
          text-align: left;
          text-indent: 2em;
          text-align:justify;
          text-align-last:justify;
       }
    }
</style>
