<template>
  <div>
    <div class="banner">
      <topHeader></topHeader>
      <banner></banner>
    </div>
    <div>
      你好啊
    </div>
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
</template>

<script>
import topHeader from './header'
import banner from './banner'
export default {
  name: 'home',
  components: {
    topHeader, banner
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
  @media (max-width: 1024px) {
    .banner{
      height: 600px;
    }
    .particles{
      height: 600px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    .banner{
      height: 500px;
    }
    .particles{
      height: 500px;
    }
  }
  @media (max-width: 767px) {
    .banner{
      height: 280px;
    }
    .particles{
      height: 280px;
    }
  }
</style>
