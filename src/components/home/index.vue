<template>
  <div>
    <div class="banner">
      <topHeader></topHeader>
      <banner></banner>
      <vue-particles
        class="particles"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="200"
        shapeType="circle"
        :particleSize="1"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="false"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push">
      </vue-particles>
    </div>
    <div class="home-item2">
      <defaultTitle title="我们的产品" subTitle="OUR PRODUCTS" data-wow-duration="2s" data-wow-delay="0.1s"
                    data-wow-offset="50" data-wow-iteration="1" class="wow animated fadeInUp"></defaultTitle>
      <our_products></our_products>
    </div>
    <div class="home-item3">
      <plan></plan>
    </div>
    <div class="home-item3">
      <defaultTitle title="INU生命互助介绍" subTitle="OUR PRODUCTS" data-wow-duration="2s" data-wow-delay="0.1s"
                    data-wow-offset="50" data-wow-iteration="1" class="wow animated fadeInUp"></defaultTitle>
      <introduction></introduction>
    </div>
    <div class="home-itme4">
      <defaultTitle title="生态体系" subTitle="OUR PRODUCTS" data-wow-duration="2s" data-wow-delay="0.1s"
                    data-wow-offset="50" data-wow-iteration="1" class="wow animated fadeInUp"></defaultTitle>
      <ecological></ecological>
      <div class="content">
        <ecological_banner></ecological_banner>
      </div>
    </div>
    <div class="home-itme5">
      <defaultTitle title="企业文化" subTitle="OUR PRODUCTS" data-wow-duration="2s" data-wow-delay="0.1s"
                    data-wow-offset="50" data-wow-iteration="1" class="wow animated fadeInUp"></defaultTitle>
      <culture></culture>
    </div>
    <div class="home-itme6">
      <defaultTitle title="合作伙伴" subTitle="OUR PRODUCTS" data-wow-duration="2s" data-wow-delay="0.1s"
                    data-wow-offset="50" data-wow-iteration="1" class="wow animated fadeInUp"></defaultTitle>
      <partner></partner>
    </div>
    <defaultFooter></defaultFooter>
  </div>
</template>

<script>
import topHeader from './header'
import banner from './banner'
import defaultTitle from './default_title'
import our_products from './our_products'
import plan from './plan'
import introduction from './introduction'
import partner from './partner'
import culture from './culture'
import ecological from './ecological'
import ecological_banner from './ecological_banner'
import defaultFooter from './footer'

export default {
  name: 'home',
  components: {
    topHeader, banner, defaultTitle, our_products, plan, introduction, partner, defaultFooter, culture, ecological, ecological_banner
  }
}
</script>

<style scoped>
  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    background: #000102;
    height: 770px;
  }
  .banner {
    height: 770px;
    overflow: hidden;
  }


  .home-itme4{
  }
  .home-itme4 .content{
    height: 800px;
    background: url("/static/img/stbg.png") repeat #000;
    background-size: 100%;
    margin-top: -140px;
    padding-top: 200px;
    width: 100%;
  }
  @media (max-width: 1024px) {
    .banner{
      height: 600px;
    }
    .particles{
      height: 600px;
    }
    .home-itme4 .content{
      height: 500px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    .banner{
      height: 500px;
    }
    .particles{
      height: 500px;
    }
    .home-itme4 .content{
      padding-top: 200px;
      height: 400px;
    }
  }
  @media (max-width: 767px) {
    .banner{
      height: 280px;
    }
    .particles{
      height: 280px;
    }
    .home-itme4 .content{
      padding-top: 120px;
      height: 260px;
    }
  }
</style>
