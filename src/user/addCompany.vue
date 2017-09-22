<template>
    <div class="add-accout">
        <div class="user-title">
            <div class='title-left'>
                <h4>账户管理</h4>
                <span>>></span>
                <h4>账户列表</h4>
            </div>
            <div class='title-right'>
               <router-link to="/app/user/userList">返回</router-link>
            </div>
        </div>
        <div class="content">
            <div class="item">
                <div class="item-title"><span class="red">*</span> 登录账号
                </div>
                <input type="text" placeholder="请输入登录账号">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 公司名称
                </div>
                <input type="text" placeholder="请输入登录账号">
            </div>
            <div class="item">
                <div class="item-title"> 公司税后
                </div>
                <input type="text" placeholder="请输入登录账号">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 联系人
                </div>
                <input type="text" placeholder="请输入登录账号">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 登录账号
                </div>
                <input type="text" placeholder="请输入登录账号">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 联系人手机号
                </div>
                <input type="text" placeholder="请输入登录账号">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 所属行业
                </div>
                 <input type="text" placeholder="请输入登录账号">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 公司电话
                </div>
                <input type="text" placeholder="请输入登录账号">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 初始密码
                </div>
                <input type="text" placeholder="请输入登录账号">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 确认密码
                </div>
                <input type="text" placeholder="请输入登录账号">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 使用时限
                </div>
                 <input type="text" placeholder="请输入登录账号">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 状态
                </div>
                 <input type="text" placeholder="请输入登录账号">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 销售人员
                </div>
                 <input type="text" placeholder="请输入登录账号">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 销售人员电话
                </div>
                 <input type="text" placeholder="请输入登录账号">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 公司域名
                </div>
                 <input type="text" placeholder="请输入登录账号">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 合作协议(合同)
                </div>
                 <input type="text" placeholder="请输入登录账号">
            </div>
            <div>
                <el-button type="primary">提交</el-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style type="text/less" lang="less" scoped >
    .add-accout{
        width: 100%;
        height: auto;
        .user-title {
            background: #ffffff;
            height: 45px;
            line-height: 45px;
            padding: 0 15px;
            width: 100%;
            box-sizing: border-box;
            .title-left {
                float: left;
                width: 150px;
                color: #67696e;
                h4 {
                    display: inline-block;
                }
                span {
                    display: inline-block;
                }
            }
            .title-right {
                height: 45px;
                line-height: 45px;
                float: right;
                a {
                    float: right;
                    width: 80px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    color: #a9a9a9;
                    font-size: 15px;
                    border: 1px solid #ccc;
                    margin-top: 7px;
                }
            }
        }
        .content{
            width: 100%;
            height: auto;
            .item{
                height: 38px;
                line-height: 38px;
                overflow: hidden;
                margin-top: 20px;
                .item-title{
                    float: left;
                    width: 120px;
                    text-align: right;
                    margin-right: 10px;
                    line-height: 38px;
                    font-size: 15px;
                    color: #0b0b0b;
                }
                input{
                    float: left;
                    width: 200px;
                    height: 36px;
                    outline: none;
                    line-height: 36px;
                    font-size: 14px;
                    border: 1px solid #e3e3e3;
                    padding-left: 10px;
                    box-sizing: border-box;
                }
            }
        }
    }
</style>