<template>
  <div class="introduction">
    <el-row class="pro-width " :gutter="45">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="wow animated fadeInUp" data-wow-duration="2s"
              data-wow-delay="0.1s" data-wow-offset="100" data-wow-iteration="1">
        <div class="content">
          <div class="left">
            <img src="../../../static/img/int1.jpg" width="100%">
          </div>
          <div class="right flex">
            <div class="title">放心</div>
            <p class="text">互助合约链上永存。任何人不可以更改一个字节。</p>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="wow animated fadeInUp" data-wow-duration="2s"
              data-wow-delay="0.1s" data-wow-offset="100" data-wow-iteration="1">
        <div class="content">
          <div class="left">
            <img src="../../../static/img/int2.jpg" width="100%">
          </div>
          <div class="right flex">
            <div class="title">可信</div>
            <p class="text">公共保障仓库，由多人实名共同看守，接受全体社区成员监督。</p>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="wow animated fadeInUp" data-wow-duration="2s"
              data-wow-delay="0.1s" data-wow-offset="100" data-wow-iteration="1">
        <div class="content">
          <div class="left">
            <img src="../../../static/img/int3.jpg" width="100%">
          </div>
          <div class="right flex">
            <div class="title">安心</div>
            <p class="text">100RMB/年，给你一个安全的港湾。</p>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="wow animated fadeInUp" data-wow-duration="2s"
              data-wow-delay="0.1s" data-wow-offset="100" data-wow-iteration="1">
        <div class="content">
          <div class="left">
            <img src="../../../static/img/int4.jpg" width="100%">
          </div>
          <div class="right flex">
            <div class="title">省心</div>
            <p class="text">条款简单，操作简单，赔付简单。</p>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="wow animated fadeInUp" data-wow-duration="2s"
              data-wow-delay="0.1s" data-wow-offset="100" data-wow-iteration="1">
        <div class="content">
          <div class="left">
            <img src="../../../static/img/int5.jpg" width="100%">
          </div>
          <div class="right flex">
            <div class="title">天然升值</div>
            <p class="text">发行总量一定，服务更多的用户，锁定越多的积分。</p>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="wow animated fadeInUp" data-wow-duration="2s"
              data-wow-delay="0.1s" data-wow-offset="100" data-wow-iteration="1">
        <div class="content">
          <div class="left">
            <img src="../../../static/img/int6.jpg" width="100%">
          </div>
          <div class="right flex">
            <div class="title">共建共赢</div>
            <p class="text">社区完全由积分持有人维护，决策，建设。所有社员共同享受社区的服务以及社区的增值。</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {WOW} from 'wowjs'

  export default {
    name: 'introduction',
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
.pro-width{
  margin: auto!important;
}
.introduction .content{
  display: flex;
  border: 1px solid #eee;
  padding: 15px;
  margin-bottom: 20px;
}
.flex{
  flex: 1;
}
.introduction .content .left{
  width: 160px;
  margin-right: 40px;
}
.introduction .content .right .title{
  font-size: 18px;
  color: #323232;
}
.introduction .content .right .text{
  color: #969696;
  font-size: 14px;
}
@media (max-width: 1024px) {
  .introduction .content{
    padding: 10px;
  }
  .introduction .content .left{
    margin-right: 20px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1000px) {

}

@media (max-width: 767px) {
  .introduction .content .left{
    display: none;
  }
  .introduction .content{
    padding: 10px;
    margin-bottom: 10px;
  }
}
</style>
