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
            <p class="text">本险种以特定重大疾病，如恶性肿瘤、心肌梗死、脑溢血等为保险对象， 当被保人患有上述疾病时，由保险公司对所花医疗费用给予适当补偿的商 业保险行为。根据保费是否返还来划分， 可分为消费型重大疾病保险和返还型重大疾病保险</p>
          </div>
          <div class="right-itme mt50">
            <div class="title">INU意外互助保障计划 <button class="btn">即将上线</button></div>
            <p class="text">本险种以特定重大疾病，如恶性肿瘤、心肌梗死、脑溢血等为保险对象， 当被保人患有上述疾病时，由保险公司对所花医疗费用给予适当补偿的商 业保险行为。根据保费是否返还来划分， 可分为消费型重大疾病保险和返还型重大疾病保险</p>
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
    margin-top: 40px;
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
