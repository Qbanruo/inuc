<template>
  <div class="culture">
    <el-row class="pro-width" :gutter="10">
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" data-wow-duration="2s" data-wow-delay="0.1s"
              data-wow-offset="10" data-wow-iteration="1" class="wow animated fadeInUp">
        <div class="content">
          <span class="icon">
            <img src="/static/img/wh1.png">
          </span>
          <div class="text">
            帮助大众管理健康，防患
            与治疗重大疾病
          </div>
          <button class="btn">企业责任</button>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" data-wow-duration="2s" data-wow-delay="0.1s"
              data-wow-offset="10" data-wow-iteration="1" class="wow animated fadeInUp">
        <div class="content">
          <span class="icon">
            <img src="/static/img/wh2.png">
          </span>
          <div class="text">
            打造全球互助体系
            建立人与人之间的信任
            共识和互助
          </div>
          <button class="btn">企业使命</button>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" data-wow-duration="2s" data-wow-delay="0.1s"
              data-wow-offset="10" data-wow-iteration="1" class="wow animated fadeInUp">
        <div class="content">
          <span class="icon">
            <img src="/static/img/wh3.png">
          </span>
          <div class="text">
            利用区块链技术，
            做到诚心，透明，全面，安全
            解决用户最底层需求
          </div>
          <button class="btn">经营理念</button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'culture'
  }
</script>

<style scoped>
  .pro-width {
    margin: auto !important;
  }

  .culture .content {
    text-align: center;
    width: 300px;
    margin: auto;
    padding:30px 0;
  }
  .culture .content:hover{
    box-shadow: 1px 2px 2px #ddd;
  }

  .culture .content .icon {
    border: 1px dashed #a0a0a0;
    border-radius: 50%;
    display: inline-block;
    padding: 12px;
  }
  .culture .content .text {
    width: 220px;
    margin:30px auto 0;
    font-size: 20px;
    color: #969696;
    height: 90px;
    line-height: 1.5;
  }
  .culture .content .btn{
    border: 1px solid #c9c9c9;
    border-radius: 25px;
    padding: 10px 20px;
    background: #fff;
    margin-top: 30px;
    font-size: 20px;
    color: #58acad;
  }
</style>
