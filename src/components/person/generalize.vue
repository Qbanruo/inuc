<template>
  <div class="person-item">
    <el-row class="pro-width">
      <el-col :xs="24" :sm="4" :md="4" :lg="2" :xl="4">
        <div class="left">
          <h2>推广记录</h2>
          <p>我的推广</p>
          <p>推广记录</p>
        </div>
      </el-col>
      <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
        <div class="right">
          <div class="tui-guang">
            <div class="title">我的推广 <button class="img-btn">我的专属海报</button> </div>
            <el-form label-width="120px" :model="form" size="mini" :inline="true" class="form-content">
                <el-form-item label="推广人数">
                  <el-input v-model="form.number" placeholder="推广人数"></el-input>
                </el-form-item>
                <el-form-item label="获得收益">
                  <el-input v-model="form.money" placeholder="获得收益"></el-input>
                </el-form-item>
            </el-form>
          </div>
          <div class="right-btm">
            <div class="title">推广记录</div>
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
                label="获得收益">
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
    name: 'generalize',
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
    margin-top: 20px;
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
