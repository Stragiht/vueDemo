<template>
    <div class="user-list">
        <div class="user-title">
            <div class='title-left'>
                <h4>账户管理</h4>
                <span>>></span>
                <h4>账户列表</h4>
            </div>
           <!-- <div class='title-right'>
                <a href="javascript:void(0)">返回</a>
            </div>-->
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
                            v-model="endTime"
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
        <div class="add-accout">
            <el-button type="primary">
                <router-link to="/app/user/addCompany">新增账号</router-link>
            </el-button>
        </div>
        <div class="table-content">
            <el-table
                    ref="multipleTable"
                    :data="tableData3"
                    border
                    tooltip-effect="dark"
                    style="width: 100%"
                    align="center"
                    min-width="100"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        min-width="100"
                        align="center">
                </el-table-column>
                <el-table-column
                        label="日期"
                        min-width="100"
                        align="center">
                    <template scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        min-width="100"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址"
                        min-width="180"
                        align="center">
                </el-table-column>
                <el-table-column label="操作" min-width="220 " align="center">
                    <template scope="scope" >
                        <el-button

                                size="small"
                                @click="handleEdit(scope.$index, scope.row)">编辑
                        </el-button>
                        <el-button
                                size="small"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>

</template>
<script>
  export default {
    data () {
      return {
        'value1': '',
        'value2': '',
        'value': '选项5',
        'input': '',
        'endTime': '',
        'options': [
          {
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
        tableData3: [
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-08',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }]
      }
    },
    methods: {
      handleSelectionChange (item) {
        console.log(item)
      },
      handleEdit (item, index) {
        console.log(item)
      }
    }
  }

</script>
<style type="text/less" lang="less" scoped>
    .user-list {
        width: 100%;
        height: auto;
        overflow: hidden;
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
        .user-content {
            box-sizing: border-box;
            padding: 0 15px;
            width: 100%;
            background: #ffffff;
            height: auto;
            .user-serach {
                width: 100%;
                box-sizing: border-box;
                padding-top: 20px;
                margin-right: 25px;
                height: auto;
                overflow: hidden;
                .accout {
                    float: left;
                    width: 310px;
                    height: 40px;
                    .accout-name {
                        width: 120px;
                        text-align: right;
                        height: 40px;
                        line-height: 40px;
                        font-size: 15px;
                        color: #0c0c0c;
                        float: left;
                        margin-right: 10px;

                    }
                    .el-input {
                        width: 170px;
                        line-height: 40px;
                    }
                }
                .time {
                    float: left;
                    width: 260px;
                    margin-bottom: 25px;
                    .create-time {
                        width: 70px;
                        text-align: right;
                        line-height: 40px;
                        font-size: 15px;
                        color: #0c0c0c;
                        float: left;
                        margin-right: 10px;
                    }
                    .el-input {
                        width: 170px;
                        line-height: 40px;
                    }
                }
                .status {
                    float: left;
                    width: 370px;
                    height: 40px;
                    margin-bottom: 25px;
                    .user-status {
                        width: 60px;
                        text-align: right;
                        line-height: 40px;
                        font-size: 15px;
                        color: #0c0c0c;
                        float: left;
                        margin-right: 10px;
                        .el-select {
                            width: 170px;
                            line-height: 40px;
                        }
                    }
                }
                .serach {
                    float: left;
                    width: 65px;
                    margin-bottom: 25px;
                    .el-button {
                        width: 65px;

                    }
                }

            }

        }
        .add-accout {
            width: 100%;
            height: 53px;
            background: #fff;
            box-sizing: border-box;
            padding: 0 15px 15px 15px;
            a{
                color: #ffffff;
            }
        }
        .table-content{
            overflow: hidden;
            width: 100%;
            padding:0 15px;
            box-sizing: border-box;
        }
    }

</style>