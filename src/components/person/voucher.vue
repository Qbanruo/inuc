<template>
  <div class="person-item">
    <el-dialog
      title="扫码填写"
      :visible.sync="dialogVisible"
      width="290px">
      <vue-qr :logoSrc="imageUrl" :logoScale="0.3" :text="codeUrl" :size="250" :dotScale="dotScale"></vue-qr>
    </el-dialog>
    <el-row class="pro-width">
      <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4">
        <div class="left">
          <h2>电子保单</h2>
          <p>未开封保单</p>
          <p>生效保单</p>
        </div>
      </el-col>
      <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
        <div class="right">
          <div class="right-btm">
            <div class="title">未开封保单</div>
            <el-table
              :data="unopenedInsurance"
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
                label="产生日期">
              </el-table-column>
              <el-table-column
                align="center"
                prop="type"
                label="投保类型">
              </el-table-column>
              <el-table-column
                align="center"
                prop="year"
                label="保障年限">
              </el-table-column>
              <el-table-column
                align="center"
                label="操作">
                <template slot-scope="scope">
                  <button class="green-btn" @click="getQRcodeLink(scope.row)">启封保单</button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="right-btm mt20">
            <div class="title">生效保单</div>
            <el-table
              :data="effectiveInsurance"
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
                label="产生日期">
              </el-table-column>
              <el-table-column
                align="center"
                prop="receiveTime"
                label="保障时间">
              </el-table-column>
              <el-table-column
                align="center"
                prop="year"
                label="保障年限">
              </el-table-column>
              <el-table-column
                align="center"
                prop="payNum"
                label="保障编号">
                <template slot-scope="scope">
                  <span v-if="scope.row.payNum">{{scope.row.payNum.slice(-5)}}</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                label="操作">
                <template slot-scope="scope">
                  <button class="green-btn" @click="downLoad(scope.row)">下载</button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
    </el-row>
    <downLoad ref="downLoad"></downLoad>
  </div>
</template>

<script>
  import api from '../../common/api'
  import vueQr from 'vue-qr'
  import downLoad from './download'
  export default {
    name: 'voucher',
    components: {
      vueQr, downLoad
    },
    data () {
      return {
        imageUrl: '../../../static/img/logo_qr.png',
        dotScale: 0.6,
        form: {
          number: '',
          money:''
        },
        effectiveInsurance: [],
        unopenedInsurance: [],
        param: {
          token: window.sessionStorage.getItem('token')
        },
        dialogVisible: false,
        codeUrl:''
      }
    },
    created(){
      this.getEffectiveInsurance()
      this.getUnopenedInsurance()
    },
    methods: {
      getEffectiveInsurance () {
        api.getEffectiveInsurance(this.param).then(s => {
          this.effectiveInsurance = s.data
        })
      },
      getUnopenedInsurance(){
        api.getUnopenedInsurance(this.param).then(s => {
          this.unopenedInsurance = s.data
        })
      },
      getQRcodeLink(row){
        let param = {
          token: this.param.token,
          id: row.id
        }
        api.insureQRcode(param).then(s => {
          let codeUrl = s.data
          if(codeUrl){
            this.$nextTick(() => {
              this.dialogVisible = true
              this.codeUrl = codeUrl
            })
          }
        })
      },
      downLoad(row){
        this.$refs.downLoad.show(row)
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
  .person-item .tui-guang{
    background: #fff;
  }
  .tui-guang .img-btn{
    background: #57c6bd;
    border: none;
    color: #fff;
    border-radius: 20px;
    float: right;
    padding: 4px 15px;
    margin: 8px 15px 0 0;
  }
  .tui-guang .form-content{
    margin-top: 20px;
  }
  .person-item .title{
    border-bottom: 1px solid #ededed;
    line-height: 2.5;
    font-size: 16px;
    padding-left: 20px;
    color: #242331;
  }
  .right-btm{
    background: #fff;
  }
  .mt20{
    margin-top: 20px;
  }
  .green-btn{
    background: #57c6bd;
    color: #fff;
    border: none;
  }
  .grey-btn{
    background: #f1f3f0;
    border: none;
  }
  .right-btm >>> .el-table td, .el-table th{
    padding: 8px 0;
  }
  .qr-code{
    margin: auto;
  }
  @media (max-width: 767px) {
    .person-item .right{
      border-left: none;
    }
  }
</style>
