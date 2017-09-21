<template>
    <header class="header">
        <div class="header-left">
            <h6>璞瑞微商城总控管理系统</h6>
            <span></span>
        </div>
        <div class="header-right">
            <div class="header-icon">
            </div>
            <h3>admin</h3>
            <span class="turn-icon">
            </span>
            <div class="change-password">
                <a href="">修改密码</a>
                <span>退出</span>
            </div>
        </div>
    </header>
</template>
<script>
  export default {}
</script>
<style type="text/less" scoped lang="scss">
    .header {
        height: 60px;
        width: 100%;
        background: #23272e;
        position: fixed;
        .header-left {
            width: 200px;
            float: left;
            line-height: 60px;
            padding-left: 0;
            color: #ffffff;
            position: relative;
            h6 {
                float: right;
                font-size: 14px;
            }
            span {
                position: absolute;
                display: block;
                width: 22px;
                height: 22px;
                background: url(../assets/images/wficon.png) no-repeat -106px -1px;
                left: 15px;
                top: 18px;
            }
        }
        .header-right {
            float: right;
            margin-right: 15px;
            width: 105px;
            color: #a9b7b5;
            position: relative;
            height: 60px;
            box-sizing: border-box;
            .header-icon {
                width: 27px;
                height: 27px;
                display: inline-block;
                overflow: hidden;
                background: url(../assets/images/wficon.png) no-repeat -1px -1px;
                left: 0;
                top: 17px;
                position: absolute;
            }
            h3 {
                line-height: 60px;
                margin-left: 37px;
            }
            .turn-icon {
                width: 12px;
                height: 7px;
                display: inline-block;
                background: url(../assets/images/wficon.png) no-repeat -185px -18px;
                position: absolute;
                top: 26px;
                right: 0;
            }
            &:hover{
                border-bottom:5px solid #31a9fd ;
            }
            &:hover{
                display: block;
            }

            .change-password {
                width: 102px;
                height: 82px;
                border: 1px solid #e3e3e3;
                position: absolute;
                top: 64px;
                left: 0;
                background: #fff;
                z-index: 2;
                display: none;
                a{
                    width: 100px;
                    height: 40px;
                    display: block;
                    font-size: 15px;
                    line-height: 40px;
                    text-align: center;
                    color: #717171;
                }
                span{
                    display: block;
                    line-height: 34px;
                    height: 34px;
                    padding-left: 20px;
                    box-sizing: border-box;
                    width: 100px;
                    cursor: pointer;
                    background: #fafafa;

                }
            }
        }
    }


</style>