<template>
    <div class="person-item">
      <el-row class="pro-width">
        <el-col :xs="24" :sm="12" :md="4" :lg="2" :xl="4">
          <div class="left">
            <h2>我的账户</h2>
            <p>我的账户</p>
            <p>交易记录</p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="20" :lg="20" :xl="20">
          <div class="right">
            <div class="right-top">
              <div class="head">
                <el-upload
                  class="avatar-uploader"
                  :action="action"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon">点击更换头像</i>
                </el-upload>
              </div>
              <div class="info flex">
                <div class="title">我的账户</div>
                <el-form label-width="80px" :model="form" size="mini">
                  <div class="form-content">
                    <el-form-item label="昵称">
                      <el-input v-model="form.name" placeholder="昵称"></el-input>
                    </el-form-item>
                    <el-form-item label="账户地址">
                      <el-input v-model="form.address" placeholder="账户地址"></el-input>
                    </el-form-item>
                    <el-form-item label="INU余额">
                      <el-input v-model="form.money" placeholder="INU余额"></el-input>
                    </el-form-item>
                  </div>
                </el-form>
              </div>
            </div>
            <div class="right-btm">
              <div class="title">交易记录</div>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  align="center"
                  type="index"
                  label="序号"
                  width="80">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="date"
                  label="日期">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="money"
                  label="金额(INU)">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="type"
                  label="交易类型">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="number"
                  label="保障编号">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'my_account',
    data () {
      return {
        action: '',
        imageUrl: '',
        form: {
          name: '',
          address: '',
          money: ''
        },
        tableData: [
          {
            date: '2019-06-12',
            money: '300',
            type: '转账',
            number:'P01234'
          },
          {
            date: '2019-06-12',
            money: '300',
            type: '转账',
            number:'P01234'
          },
          {
            date: '2019-06-12',
            money: '300',
            type: '转账',
            number:'P01234'
          }
        ]
      }
    },
    methods: {
      handleAvatarSuccess () {

      },
      beforeAvatarUpload(){

      }
    },
  }
</script>

<style scoped>
  .pro-width{
    background: #fff;
  }
  .person-item{
    margin-top: 20px;
  }
  .person-item .left{
    background: #fff;
    padding: 5px 0;
  }
  .person-item .left h2{
    font-size: 16px;
    padding: 0 15px;
  }
  .person-item .left p{
    color: #666;
    padding: 0 15px;
  }
  .person-item .right{
    background: #f5f5f5;
    border-left: 20px solid #f5f5f5;
  }
  .person-item .right-top{
    display: flex;
  }
  .person-item .flex{
    flex: 1;
  }
  .person-item .right-top{
    height: 190px;
    overflow: hidden;
  }
  .person-item .right-top .head{
    width: 190px;
    height: 190px;
    background: #57c6bd;
  }
  .person-item .right-top .info{
    background: #fff;
  }
  .person-item .title{
    border-bottom: 1px solid #ededed;
    line-height: 2.5;
    font-size: 16px;
    padding-left: 20px;
    color: #242331;
  }
  .person-item .form-content{
    margin-top: 10px;
    width: 300px;
  }
  .right-btm{
    background: #fff;
    margin-top: 20px;
  }
  .right-btm >>> .el-table td, .el-table th{
    padding: 8px 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1000px) {
    .person-item .right{
      border-left: none;
    }
  }
  @media (max-width: 767px) {
    .person-item .right{
      border-left: none;
    }
  }
</style>
