<template>
  <div class="banner-box">
    <div class="banner-content">
      <img src="../../../static/img/banner-icon.png" alt="" class="banner-icon animated fadeIn show">
      <img src="../../../static/img/banner-logo.png" alt="" class="banner-logo animated fadeIn show">
    </div>
    <div class="banner-btn animated fadeIn show">
      <span class="price-btn">INU： <i>￥500</i></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'banner'
  }
</script>

<style scoped>

  .banner-box{
    width: 500px;
    text-align: center;
    margin: 6% auto 0;
  }
  .banner-content{
    position: relative;
  }
  .banner-icon{
    width: 100%;
  }
  .banner-logo{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -70px;
    margin-left: -60px;
  }
  .banner-btn{
    width: 300px;
    margin: auto;
  }
  .price-btn{
    border: 1px solid #fff;
    color: #fff;
    padding: 10px 25px;
    border-radius: 6px;
    font-size: 17px;
  }
  .price-btn i{
    font-style: normal;
    color: #5ac8c9;
    font-size: 26px;
    vertical-align: middle;
  }
  @media (max-width: 1024px) {

  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    .banner-box{
      width: 400px;
      margin-top: 0;
    }
  }
  @media (max-width: 767px) {
    .banner-box{
      width: 200px;
      margin-top: 0;
    }
    .banner-logo{
      width: 50px;
      margin-top: -25px;
      margin-left: -25px;
    }
    .banner-btn{
      width: 200px;
    }
    .price-btn{
      padding: 5px 10px;
    }

  }
</style>
