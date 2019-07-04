<template>
    <div class="person-item">
      <el-row class="pro-width">
        <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4">
          <div class="left">
            <h2>个人信息</h2>
            <p>个人信息</p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
          <div class="right">
            <div class="right-top">
              <div class="head">
                <img :src="imageUrl" class="avatar">
              </div>
              <div class="info flex">
                <div class="title">我的账户</div>
                <el-form label-width="80px" :model="form" size="mini">
                  <div class="form-content">
                    <el-form-item label="昵称">
                      <el-input v-model="form.name" placeholder="昵称" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="账户地址">
                      <el-input v-model="form.address" placeholder="账户地址" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="INU余额">
                      <el-input v-model="form.balance" placeholder="INU余额" readonly></el-input>
                    </el-form-item>
                  </div>
                  <div class="sign-out">
                    <el-button type="danger" @click="signOut" size="mini" plain>退出登录</el-button>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import api from '../../common/api'
  export default {
    name: 'my_account',
    data () {
      return {
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
      getPurchaseRecord(){
        api.getPurchaseRecord(this.param).then(s => {
          this.purchaseRecord = s.data
        })
      },
      getbalancebyaddr(){
        api.getbalancebyaddr(this.param).then(s => {
          this.form.balance = s.data
        })
      },
      signOut(){
        sessionStorage.clear()
        this.$router.push({
          path: '/'
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
  .person-item .right-top{
    display: flex;
  }
  .person-item .flex{
    flex: 1;
  }
  .person-item .right-top .head{
    width: 195px;
    background: #57c6bd;
    text-align: center;
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
    float: left;
  }
  .person-item img{
    border-radius: 50%;
    margin-top: 37px;
    width: 60%;
  }
  .sign-out{
    float: right;
    margin: 105px 20px 20px 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {

  }
  @media (max-width: 767px) {
    .person-item .right{
      border-left: none;
    }
    .sign-out{
      margin: 0 20px 10px;
    }
    .person-item .form-content{
      width: 240px;
      padding-right: 10px;
    }
  }
</style>
