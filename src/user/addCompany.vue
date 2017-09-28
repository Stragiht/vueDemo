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
                <input type="text" placeholder="请输入公司名称">
            </div>
            <div class="item">
                <div class="item-title"> 公司税后
                </div>
                <input type="text" placeholder="请输入公司税后">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 联系人
                </div>
                <input type="text" placeholder="请输入联系人">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 联系人手机号
                </div>
                <input type="text" placeholder="请输入联系人手机号">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 所属行业
                </div>
                 <input type="text" placeholder="请输入所属行业">
            </div>
            <div class="item">
                <div class="item-title">公司电话
                </div>
                <input type="text" placeholder="请输入公司电话">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 初始密码
                </div>
                <input type="text" placeholder="请输入初始密码">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 确认密码
                </div>
                <input type="text" placeholder="请输入确认密码">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 使用时限
                </div>
                <el-date-picker
                        v-model="value1"
                        type="datetime"
                        placeholder="请选择开始日期">
                </el-date-picker>
                <el-date-picker
                        v-model="value1"
                        type="datetime"
                        placeholder="请选择结束日期">
                </el-date-picker>
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 状态
                </div>
                <el-radio class="radio"  label="1">备选项</el-radio>
                <el-radio class="radio" label="2">备选项</el-radio>
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 销售人员
                </div>
                 <input type="text" placeholder="请输入销售人员">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 销售人员电话
                </div>
                 <input type="text" placeholder="请输入销售人员电话">
            </div>
            <div class="item">
                <div class="item-title"><span class="red">*</span> 公司域名
                </div>
                 <input type="text" placeholder="请输入公司域名"><span>pokeepera.net</span>
            </div>
            <div class="upload">
                <div class="item-title"><span class="red">*</span> 合作协议(合同)
                </div>
                <!--<div class="upload_file">
                    <i class="el-icon-plus avatar-uploader-icon"></i>
                    <input type="file" >
                </div>-->
                <upload :src="'p/api/upload/files'"></upload>
            </div>
            <div class="button">
                <el-button type="primary">提交</el-button>
            </div>
        </div>
    </div>
</template>
<script>
  import upload from '@/components/upload'

  export default {
    components: {upload}
  }
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
            .upload{
                height: 150px;
                overflow: hidden;
                padding: 15px 0;
                box-sizing: border-box;
                .item-title{
                    float: left;
                    width: 120px;
                    text-align: right;
                    margin-right: 10px;
                    line-height: 38px;
                    font-size: 15px;
                    color: #0b0b0b;
                }
                .upload_file{
                    float: left;
                    position: relative;
                    i{
                        display: block;
                        width: 120px;
                        height: 120px;
                        border: 1px solid #cccccc;
                        text-align: center;
                        line-height: 120px;
                    }
                    input{
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 120px;
                        height: 120px;
                        opacity: 0;
                    }
                }

            }

        }
        .button{
            margin-left: 130px;
        }
        .el-date-editor el-input el-date-editor--datetime{
            float: left;
            width: 200px;
            height: 36px;;
        }
    }
</style>