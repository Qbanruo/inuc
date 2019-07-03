<template>
  <div class="person-item">
    <el-row class="pro-width">
      <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4">
        <div class="left">
          <h2>交易记录</h2>
          <p>交易记录</p>
        </div>
      </el-col>
      <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
        <div class="right">
          <div class="right-btm">
            <div class="title">交易记录</div>
            <el-table
              :data="purchaseRecord"
              style="width: 100%">
              <el-table-column
                align="center"
                type="index"
                label="序号"
                width="80">
              </el-table-column>
              <el-table-column
                align="center"
                prop="recordTime"
                label="日期">
              </el-table-column>
              <el-table-column
                align="center"
                prop="amount"
                label="金额(INU)">
              </el-table-column>
              <el-table-column
                align="center"
                prop="type"
                label="交易类型">
              </el-table-column>
              <el-table-column
                align="center"
                prop="payNum"
                label="保障编号">
                <template slot-scope="scope">
                  <span v-if="scope.row.payNum">{{scope.row.payNum.slice(-5)}}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import api from '../../common/api'
  export default {
    name: 'record',
    data () {
      return {
        action: '',
        imageUrl: '',
        form: {
          name: '',
          address: '',
          balance: ''
        },
        purchaseRecord: [],
        param: {
          token: window.sessionStorage.getItem('token')
        }
      }
    },
    created(){
      let personInfo = JSON.parse(window.sessionStorage.getItem('personInfo'))
      if(personInfo){
        this.imageUrl = personInfo.headimgurl
        this.form.name = personInfo.nickname
        this.form.address = personInfo.address
        this.getPurchaseRecord()
      }
      this.getbalancebyaddr()
    },
    methods: {
      handleAvatarSuccess () {

      },
      beforeAvatarUpload(){

      },
      getPurchaseRecord(){
        api.getPurchaseRecord(this.param).then(s => {
          this.purchaseRecord = s.data
        })
      },
      getbalancebyaddr(){
        api.getbalancebyaddr(this.param).then(s => {
          this.form.balance = s.data
        })
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
  }
  .right-btm >>> .el-table td, .el-table th{
    padding: 8px 0;
  }
  .person-item >>> .el-upload img{
    border-radius: 50%;
    margin-top: 20px;
    width: 60%;
  }
  .upload-img-btn{
    background: #fff;
    border: none;
    border-radius: 12px;
    margin-top: 10px;
    font-size: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {

  }
  @media (max-width: 767px) {
    .person-item .right{
      border-left: none;
    }
  }
</style>
