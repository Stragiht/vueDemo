<template>
   <div>
       <div class="user-list">
           <div class="user-title">
               <div class ='title-left'>
                   <h4>账户管理</h4>
                   <span>>></span>
                   <h4>账户列表</h4>
               </div>
               <div class ='title-right'>
                   <a href="javascript:void(0)">返回</a>
               </div>
           </div>
           <div class="user-content">
               <div class="user-serach">
                   <div class="accout">
                       <div class="accout-name">
                           登录账号
                       </div>
                       <el-input v-model="input" placeholder="请输入内容"></el-input>
                   </div>
                   <div class="time">
                       <div class="create-time">
                           创建时间
                       </div>
                       <el-date-picker
                               v-model="value1"
                               type="datetime"
                               placeholder="选择日期时间">
                       </el-date-picker>
                   </div>
                   <div class="time">
                       <div class="create-time">
                           到期时间
                       </div>
                       <el-date-picker
                               v-model="value2"
                               type="datetime"
                               placeholder="选择日期时间">
                       </el-date-picker>
                   </div>
                   <div class="status">
                       <div class="user-status">
                            状态
                       </div>
                       <el-select v-model="value" placeholder="请选择">
                           <el-option
                                   v-for="item in options"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                           </el-option>
                       </el-select>
                   </div>
                   <div class="serach">
                       <el-button type="primary">查询</el-button>
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>
<script>
  export default {
    data () {
      return {
        'value1': '',
        'value2': ''
      }
    }
  }

</script>
<style type="text/less" lang="less" scoped>
    .user-list{
        width: 100%;
        height: auto;
        .user-title{
            background: #ffffff;
            height: 45px;
            line-height: 45px;
            padding:0 15px;
            width: 100%;
            box-sizing: border-box;
            .title-left{
                float: left;
                width: 150px;
                color: #67696e;
                h4{
                    display: inline-block;
                }
                span{
                    display: inline-block;
                }
            }
            .title-right{
                height: 45px;
                line-height: 45px;
                float: right;
                a{
                    float: right;
                    width: 80px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    color: #a9a9a9;
                    font-size: 15px;
                    border:1px solid #ccc;
                    margin-top:7px;
                }
            }
        }
        .user-content{
            box-sizing: border-box;
            padding: 0 15px;
            width: 100%;
            background: #ffffff;
            height: auto;
            .user-serach{
                width: 100%;
                box-sizing: border-box;
                padding-top: 20px;
                margin-right: 25px;
                .accout{
                    float: left;
                    width: 310px;
                    margin-bottom: 25px;
                    .accout-name{
                        width: 120px;
                        text-align: right;
                        line-height: 38px;
                        font-size: 15px;
                        color: #0c0c0c;
                        float: left;
                        margin-right: 10px;


                    }
                    .el-input{
                        width: 170px;
                    }
                }
                .time{
                    float: left;
                    width: 320px;
                    margin-bottom: 25px;
                    .create-time{
                        width: 68px;
                        text-align: right;
                        line-height: 38px;
                        font-size: 15px;
                        color: #0c0c0c;
                        float: left;
                        margin-right: 10px;
                    }
                }
                .serach{
                    float: left;
                    width: 65px;
                    margin-bottom: 25px;
                    .el-button{
                        width: 65px;
                    }
                }

            }
        }

    }

</style>