<template>
  <div class="person-item">
    <el-row class="pro-width">
      <el-col :xs="24" :sm="12" :md="4" :lg="2" :xl="4">
        <div class="left">
          <h2>电子凭证</h2>
          <p>未开封保单</p>
          <p>生效保单</p>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="20" :lg="20" :xl="20">
        <div class="right">
          <div class="right-btm">
            <div class="title">未开封保单</div>
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
                prop="number"
                label="保障编号">
              </el-table-column>
              <el-table-column
                align="center"
                prop="year"
                label="保单年限">
              </el-table-column>
              <el-table-column
                align="center"
                prop="shouyi"
                label="操作">
                <template slot-scope="scope">
                  <button class="grey-btn">预览</button>
                  <button class="green-btn">填写</button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="right-btm mt20">
            <div class="title">生效保单</div>
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
                label="产生日期">
              </el-table-column>
              <el-table-column
                align="center"
                prop="number"
                label="保障时间">
              </el-table-column>
              <el-table-column
                align="center"
                prop="year"
                label="保单年限">
              </el-table-column>
              <el-table-column
                align="center"
                prop="year"
                label="保障编号">
              </el-table-column>
              <el-table-column
                align="center"
                prop="shouyi"
                label="操作">
                <template slot-scope="scope">
                  <button class="grey-btn">预览</button>
                  <button class="green-btn">下载</button>
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
  export default {
    name: 'voucher',
    data () {
      return {
        form: {
          number: '',
          money:''
        },
        tableData: [
          {
            date: '2019-06-12',
            number:'P01234',
            year: '20',
            shouyi: '0'
          },
          {
            date: '2019-06-12',
            number:'P01234',
            year: '20',
            shouyi: '0'
          },
          {
            date: '2019-06-12',
            number:'P01234',
            year: '20',
            shouyi: '0'
          }
        ]
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
  @media (max-width: 767px) {
    .person-item .right{
      border-left: none;
    }
  }
</style>
