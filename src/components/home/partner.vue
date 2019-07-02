<template>
  <div class="partner">
    <el-row class="pro-width " :gutter="45">
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="wow animated fadeInUp" data-wow-duration="2s"
              data-wow-delay="0.1s" data-wow-offset="100" data-wow-iteration="1">
        <div class="content">
          <img src="../../../static/img/partner2.png" width="100%">
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="wow animated fadeInUp" data-wow-duration="2s"
              data-wow-delay="0.1s" data-wow-offset="100" data-wow-iteration="1">
        <div class="content">
          <img src="../../../static/img/partner3.png" width="100%">
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="wow animated fadeInUp" data-wow-duration="2s"
              data-wow-delay="0.1s" data-wow-offset="100" data-wow-iteration="1">
        <div class="content">
          <img src="../../../static/img/partner4.png" width="100%">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'partner'
  }
</script>

<style scoped>
  .pro-width {
    margin: auto !important;
  }

  .partner {
    padding: 50px 0;
  }
</style>
