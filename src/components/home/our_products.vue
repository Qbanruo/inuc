<template>
  <div>
    <buy ref="buyPro"></buy>
    <el-row class="pro-width" :gutter="10">
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" data-wow-duration="2s" data-wow-delay="0.1s"
              data-wow-offset="10" data-wow-iteration="1" class="wow animated fadeInUp">
        <div class="pro-content" @click="showProduct('1年')">
          <div class="pro-icon">
            <img src="../../../static/img/pro.png" alt="">
          </div>
          <div class="title" :class="[show === '1年' ? 'color' : '']">INU大病互助</div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" data-wow-duration="2s" data-wow-delay="0.1s"
              data-wow-offset="10" data-wow-iteration="1" class="wow animated fadeInUp">
        <div class="pro-content" @click="showProduct('5年')">
          <div class="pro-icon">
            <img src="../../../static/img/pro.png" alt="">
          </div>
          <div class="title" :class="[show === '5年' ? 'color' : '']">INU重疾互助</div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" data-wow-duration="2s" data-wow-delay="0.1s"
              data-wow-offset="10" data-wow-iteration="1" class="wow animated fadeInUp">
        <div class="pro-content" @click="showProduct('10年')">
          <div class="pro-icon">
            <img src="../../../static/img/pro.png" alt="">
          </div>
          <div class="title" :class="[show === '10年' ? 'color' : '']">INU意外互助</div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" data-wow-duration="2s" data-wow-delay="0.1s"
              data-wow-offset="10" data-wow-iteration="1" class="wow animated fadeInUp">
        <div class="pro-content" @click="showProduct('20年')">
          <div class="pro-icon">
            <img src="../../../static/img/pro.png" alt="">
          </div>
          <div class="title" :class="[show === '20年' ? 'color' : '']">INU老年互助</div>
        </div>
      </el-col>
    </el-row>
    <el-row class="pro-banner" v-show="show === '1年'">
      <div class="pro-width">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="wow animated fadeInLeft" data-wow-duration="2s"
                data-wow-delay="0.1s" data-wow-offset="10" data-wow-iteration="1">
          <div class="left">
            <div class="title">重疾互助保障计划</div>
            <div class="sub-title">种类：1年</div>
            <div class="text">
              我们希望通过人与人之间的互助，为社会每一个人提供医疗保障，让“人人为我、我为人人”成为
              一种现实，让每一笔可能摧毁一个家庭的高昂医疗费用转化为社会中每一个人轻松支付的费用。所以，
              我们致力于利用区块链技术，建立一份人与人之间的共识，这一份共识除了是人们的信任，更多是基
              于区块链技术的技术逻辑，用区块链技术保障每一个人的共识信任。通过链上社区人与人的信任共识，
              建立“共建共赢，互助互信”的社区体系。
            </div>
            <button class="pro-btn" @click="showBuy">立即购买</button>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="wow animated fadeInRight" data-wow-duration="2s"
                data-wow-delay="0.1s" data-wow-offset="10" data-wow-iteration="1">
          <div class="right">
            <img src="../../../static/img/pro_1_year.png" width="100%">
          </div>
        </el-col>
      </div>
    </el-row>
    <el-row class="pro-banner" v-show="show === '5年'">
      <div class="pro-width">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="wow animated fadeInLeft" data-wow-duration="2s"
                data-wow-delay="0.1s" data-wow-offset="10" data-wow-iteration="1">
          <div class="left">
            <div class="title">INU重疾互助</div>
            <!--<div class="sub-title">种类：5年</div>-->
            <div class="text">
            </div>
            <!--<button class="pro-btn disabled" disabled>立即购买</button>-->
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="wow animated fadeInRight" data-wow-duration="2s"
                data-wow-delay="0.1s" data-wow-offset="10" data-wow-iteration="1">
          <div class="right">
            <img src="../../../static/img/pro_2_year.png" width="100%">
          </div>
        </el-col>
      </div>
    </el-row>
    <el-row class="pro-banner" v-show="show === '10年'">
      <div class="pro-width">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="wow animated fadeInLeft" data-wow-duration="2s"
                data-wow-delay="0.1s" data-wow-offset="10" data-wow-iteration="1">
          <div class="left">
            <div class="title">INU意外互助</div>
            <!--<div class="sub-title">种类：10年</div>-->
            <!--<div class="text">-->
            <!--</div>-->
            <!--<button class="pro-btn disabled" disabled>立即购买</button>-->
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="wow animated fadeInRight" data-wow-duration="2s"
                data-wow-delay="0.1s" data-wow-offset="10" data-wow-iteration="1">
          <div class="right">
            <img src="../../../static/img/pro_5_year.png" width="100%">
          </div>
        </el-col>
      </div>
    </el-row>
    <el-row class="pro-banner" v-show="show === '20年'">
      <div class="pro-width">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="wow animated fadeInLeft" data-wow-duration="2s"
                data-wow-delay="0.1s" data-wow-offset="10" data-wow-iteration="1">
          <div class="left">
            <div class="title">INU老年互助</div>
            <!--<div class="sub-title">种类：20年</div>-->
            <!--<div class="text">-->
            <!--</div>-->
            <!--<button class="pro-btn disabled" disabled>立即购买</button>-->
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="wow animated fadeInRight" data-wow-duration="2s"
                data-wow-delay="0.1s" data-wow-offset="10" data-wow-iteration="1">
          <div class="right">
            <img src="../../../static/img/pro_10_year.png" width="100%">
          </div>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
  import {WOW} from 'wowjs'
  import buy from './buy'
  export default {
    name: 'our_products',
    components: {buy},
    data () {
      return {
        show: '1年'
      }
    },
    methods: {
      showProduct (val) {
        this.show = val
      },
      showBuy(){
        let token  = window.sessionStorage.getItem('token')
        if(token){
          this.$refs.buyPro.show()
        } else {
          this.$emit('login')
        }
      },
    },
    mounted () {
      let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 10,
        mobile: true
      })
      wow.init();
    }
  }
</script>

<style scoped>
  .color{
    color: #6bc5c6;
  }
  .pro-width {
    margin: auto !important;
    padding: 0 0 50px;
  }

  .pro-icon {
    background: #6bc5c6;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    text-align: center;
    margin: auto;
  }

  .pro-icon img {
    margin-top: 20px;
  }

  .pro-content .title {
    font-size: 18px;
    text-align: center;
    margin-top: 25px;
  }

  .pro-content {
    padding: 20px 0;
  }

  .pro-banner {
    background: #000;
    color: #fff;
  }

  .pro-banner .left .title {
    font-size: 26px;
    margin-top: 100px;
  }
  .pro-banner .left .sub-title {
    font-size: 15px;
    margin-top: 10px;
  }
  .pro-banner .left .text {
    font-size: 15px;
    margin-top: 30px;
  }

  .pro-banner .right {
    float: right;
  }

  .pro-banner .pro-btn {
    color: #3ad3ae;
    border: 1px solid #3ad3ae;
    background: none;
    padding: 5px 40px;
    font-size: 17px;
    margin-top: 30px;
  }
  .disabled{
    color: #333!important;
    border: 1px solid #ddd!important;
    background: #ddd!important;
  }
  @media (max-width: 1200px) {

  }
  @media (max-width: 1024px) {

  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    .pro-banner .left .title {
      margin-top: 40px;
    }
  }
  @media (max-width: 767px) {

  }
</style>
