<template>
  <div class="plan-box">
    <el-row class="pro-width" :gutter="40">
      <el-col :xs="24" :sm="10" :md="8" :lg="8" :xl="8" class="wow animated fadeInUp" data-wow-duration="2s"
              data-wow-delay="0.1s" data-wow-offset="100" data-wow-iteration="1">
        <div class="left">
          <img src="../../../static/img/plan.png" width="100%">
        </div>
      </el-col>
      <el-col :xs="24" :sm="14" :md="16" :lg="16" :xl="16" class="wow animated fadeInUp" data-wow-duration="2s"
              data-wow-delay="0.1s" data-wow-offset="100" data-wow-iteration="1">
        <div class="right">
          <div class="right-itme mt50">
            <div class="title">INU意外互助保障计划 <button class="btn">即将上线</button></div>
            <p class="text">互助范围广，涵盖猝死、意外伤残、身故，最高可获得百万互助金</p>
          </div>
          <div class="right-itme mt50">
            <div class="title">INU老年防癌保障计划 <button class="btn">即将上线</button></div>
            <p class="text">三高及心脑血管疾病患者均可加入，专属于老年人的低门槛防癌计划，年龄覆盖范围60周岁---70周岁</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {WOW} from 'wowjs'

  export default {
    name: 'plan',
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

  .plan-box {
    padding: 75px 0;
    background: #fafafa;
  }
  .plan-box .mt50{
    margin-top: 50px;
  }
  .plan-box .right .right-itme .title{
    font-size: 20px;
    color: #323232;
  }
  .plan-box .right .right-itme .title .btn{
    background: #ce0b0b;
    color: #fff;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    vertical-align: middle;
    font-style: normal;
    padding: 2px 10px;
    margin-top: -5px;
    margin-left: 20px;
  }
  .plan-box .right .right-itme .text{
    font-size: 14px;
    color: #969696;
    line-height: 1.8;
  }
  .plan-box .left img{
    border: 4px solid #fff;
    box-shadow: 2px 2px 2px #ddd;
  }
  @media (max-width: 1024px) {
    .plan-box .left{
      margin-top: 60px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    .plan-box .mt50{
      margin-top: 20px;
    }
  }
</style>
