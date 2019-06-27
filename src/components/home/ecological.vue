<template>
  <div class="ecological">
    <el-row class="pro-width" :gutter="10">
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" data-wow-duration="2s" data-wow-delay="0.1s"
              data-wow-offset="10" data-wow-iteration="1" class="wow animated fadeInUp">
        <div class="content">
          <div class="icon">
            <img src="../../../static/img/st1.png">
          </div>
          <div class="title">互助保障</div>
          <div class="text">
            提供多种互助保
            障产品提前保障用户,
            免去资金烦恼
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" data-wow-duration="2s" data-wow-delay="0.1s"
              data-wow-offset="10" data-wow-iteration="1" class="wow animated fadeInUp">
        <div class="content">
          <div class="icon">
            <img src="../../../static/img/st2.png">
          </div>
          <div class="title">互助医疗</div>
          <div class="text">
            建立全球医疗
            互助体系解决就医难
            难就医,看病贵
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" data-wow-duration="2s" data-wow-delay="0.1s"
              data-wow-offset="10" data-wow-iteration="1" class="wow animated fadeInUp">
        <div class="content">
          <div class="icon">
            <img src="../../../static/img/st3.png">
          </div>
          <div class="title">互助慈善</div>
          <div class="text">
            以援助贫困家庭
            为本不分种族，不分宗教
            不涉及政治
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" data-wow-duration="2s" data-wow-delay="0.1s"
              data-wow-offset="10" data-wow-iteration="1" class="wow animated fadeInUp">
        <div class="content">
          <div class="icon">
            <img src="../../../static/img/st4.png">
          </div>
          <div class="title">健康平台</div>
          <div class="text">
            每人差异化，细分化
            的健康管理，建立以社区为
            基点的健康服务
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'ecological'
  }
</script>

<style scoped>
  .pro-width {
    margin: auto !important;
  }
  .ecological .content {
    text-align: center;
    width: 220px;
    box-shadow: 0.5px 0.5px 0.5px 0.5px #ddd;
    border-radius: 4px;
    padding: 35px 0;
    background: #fff;
    margin:0 auto 20px;
  }

  .ecological .content .icon {
    width: 72px;
    height: 72px;
    background: #3cc8c8;
    border-radius: 50%;
    text-align: center;
    margin: auto;
  }

  .ecological .content .icon img {
    margin-top: 18px;
  }

  .ecological .content .title {
    font-size: 18px;
    color: #053232;
    margin-top: 40px;
  }

  .ecological .content .text {
    font-size: 14px;
    color: #969696;
    margin: 15px auto 0;
    width: 140px;
  }


</style>
