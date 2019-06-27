<template>
  <div class="ecological-banner">
    <el-row class="pro-width" :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" data-wow-duration="2s" data-wow-delay="0.1s"
              data-wow-offset="10" data-wow-iteration="1" class="wow animated fadeInUp content-col">
          <img src="/static/img/st5.png" width="100%">
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" data-wow-duration="2s" data-wow-delay="0.1s"
              data-wow-offset="10" data-wow-iteration="1" class="wow animated fadeInUp content-col">
          <img src="/static/img/st6.png" width="100%">
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {WOW} from 'wowjs'

  export default {
    name: 'ecological_banner',
    mounted () {
      let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 10,
        mobile: true
      })
      wow.init()
    }
  }
</script>

<style scoped>
  .pro-width {
    margin: auto !important;
  }
  .ecological-banner .content-col{
    margin-top: 70px;
  }
  @media (max-width: 1024px) {
    .ecological-banner .content-col{
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1000px) {
    .ecological-banner .content-col{
      margin-top: 0;
    }
  }
</style>
