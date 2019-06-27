<template>
  <div>
    <buy ref="buyPro"></buy>
    <el-row class="pro-width" :gutter="10">
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" data-wow-duration="2s" data-wow-delay="0.1s"
              data-wow-offset="10" data-wow-iteration="1" class="wow animated fadeInUp">
        <div class="pro-content" @click="showProduct('1年')">
          <div class="pro-icon">
            <img src="/static/img/pro.png" alt="">
          </div>
          <div class="title" :class="[show === '1年' ? 'color' : '']">INU大病互助(1年)</div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" data-wow-duration="2s" data-wow-delay="0.1s"
              data-wow-offset="10" data-wow-iteration="1" class="wow animated fadeInUp">
        <div class="pro-content" @click="showProduct('2年')">
          <div class="pro-icon">
            <img src="/static/img/pro.png" alt="">
          </div>
          <div class="title" :class="[show === '2年' ? 'color' : '']">INU大病互助(2年)</div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" data-wow-duration="2s" data-wow-delay="0.1s"
              data-wow-offset="10" data-wow-iteration="1" class="wow animated fadeInUp">
        <div class="pro-content" @click="showProduct('5年')">
          <div class="pro-icon">
            <img src="/static/img/pro.png" alt="">
          </div>
          <div class="title" :class="[show === '5年' ? 'color' : '']">INU大病互助(5年)</div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" data-wow-duration="2s" data-wow-delay="0.1s"
              data-wow-offset="10" data-wow-iteration="1" class="wow animated fadeInUp">
        <div class="pro-content" @click="showProduct('10年')">
          <div class="pro-icon">
            <img src="/static/img/pro.png" alt="">
          </div>
          <div class="title" :class="[show === '10年' ? 'color' : '']">INU大病互助(10年)</div>
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
            <div class="text">我们希望通过人与人之间的互助，为社会每一个人提供医疗保障，让“人人为我、我为人人”成为
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
            <img src="/static/img/pro_1_year.png" width="100%">
          </div>
        </el-col>
      </div>
    </el-row>
    <el-row class="pro-banner" v-show="show === '2年'">
      <div class="pro-width">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="wow animated fadeInLeft" data-wow-duration="2s"
                data-wow-delay="0.1s" data-wow-offset="100" data-wow-iteration="1">
          <div class="left">
            <div class="title">重疾互助保障计划</div>
            <div class="sub-title">种类：2年</div>
            <div class="text">保险作为一种抗风险的保障措施，是现代社会一个不可或缺的部分，是每个人社会
              生活中的最佳的稳定保障。保险在保障社会稳定和促进经济发展及对外贸易中发挥
              了巨大作用。不仅可以保障社会再生产的正常进行，积极推动商品的流通和消费，
              同时有利于财政和信贷收入平衡，增加外汇收入，增强国家支付能力。
            </div>
            <button class="pro-btn">立即购买</button>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="wow animated fadeInRight" data-wow-duration="2s"
                data-wow-delay="0.1s" data-wow-offset="100" data-wow-iteration="1">
          <div class="right">
            <img src="/static/img/pro_2_year.png" width="100%">
          </div>
        </el-col>
      </div>
    </el-row>
    <el-row class="pro-banner" v-show="show === '5年'">
      <div class="pro-width">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="wow animated fadeInLeft" data-wow-duration="2s"
                data-wow-delay="0.1s" data-wow-offset="10" data-wow-iteration="1">
          <div class="left">
            <div class="title">重疾互助保障计划</div>
            <div class="sub-title">种类：5年</div>
            <div class="text">INU 生命互助相互保障社区是由 InUnion Chain LTD.发起，利用区块链技术与通证理
              念，由社区会员自我管理的全球性的互助保障社区。社区不以盈利为目的，秉承会员互助共
              济、风险共担的理念。InUnion Chain LTD 发行的 INU 通证最初是提供给本社区建设的捐助
              者、建设者和倡导者，本社区中会员可以使用 INU 享受本社区提供的互助保障服务。
            </div>
            <button class="pro-btn">立即购买</button>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="wow animated fadeInRight" data-wow-duration="2s"
                data-wow-delay="0.1s" data-wow-offset="10" data-wow-iteration="1">
          <div class="right">
            <img src="/static/img/pro_5_year.png" width="100%">
          </div>
        </el-col>
      </div>
    </el-row>
    <el-row class="pro-banner" v-show="show === '10年'">
      <div class="pro-width">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="wow animated fadeInLeft" data-wow-duration="2s"
                data-wow-delay="0.1s" data-wow-offset="10" data-wow-iteration="1">
          <div class="left">
            <div class="title">重疾互助保障计划</div>
            <div class="sub-title">种类：10年</div>
            <div class="text">区块链是一种有别于传统数据保存方式的新技术。纵观其短暂的发展历程，
              区块链已经从最初的单一数字代币逐渐发展成为贯穿于、信用、金融、资产管理、
              医疗、司法等各行各业的创新者；区块链具有以下特点 <br/>
              <br/>
              (a )账本公开透明    (b) 去中心化    (c )不可篡改   (d)较低的信任成本    (e)无地域限制
            </div>
            <button class="pro-btn">立即购买</button>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="wow animated fadeInRight" data-wow-duration="2s"
                data-wow-delay="0.1s" data-wow-offset="10" data-wow-iteration="1">
          <div class="right">
            <img src="/static/img/pro_10_year.png" width="100%">
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
        console.log(111)
        this.$refs.buyPro.show()
      }
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
