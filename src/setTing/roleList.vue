<template>
    <div class="role-list">
        <div class="user-title">
            <div class='title-left'>
                <h4>权限管理</h4>
            </div>
            <div class='title-right'>
                <a href="javascript:void(0)">返回</a>
            </div>
            -
        </div>
        <div class="table-content">
            <el-table
                    ref="multipleTable"
                    :data="roleData"
                    border
                    tooltip-effect="dark"
                    style="width: 100%"
                    align="center"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        min-width="220"
                        align="center">
                </el-table-column>
                <el-table-column
                        label="所属角色"
                        min-width="100"
                        align="center">
                    <template scope="scope">{{ scope.row.address }}</template>
                </el-table-column>
                <el-table-column label="操作" width="320 " align="center">
                    <template scope="scope">
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
        <div class="page">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </div>
    </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        roleData: [
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
        currentPage4: 1
      }
    },
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      },
      handleSelectionChange () {

      },
      handleEdit () {

      },
      handleDelete () {

      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
    .role-list {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 0 15px;
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
        .page {
            text-align: center;
            margin-top: 10px;
            height: 30px;
            float: right;
            .el-pagination {
                height: 30px;
                line-height: 30px;

            }
            .el-pagination__total {
                float: right !important;;
            }
            .el-pagination__sizes {
                float: right !important;
            }
        }
    }
</style>