<template>
  <div>
    <div class="banner">
      <topHeader></topHeader>
    </div>
    <vue-particles
      class="particles"
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="150"
      shapeType="circle"
      :particleSize="2"
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
export default {
  name: 'home',
  components: {
    topHeader
  }
}
</script>

<style scoped>
  .banner {
    height: 100vh;
    overflow: hidden;
  }

  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    background: #000;
  }

</style>
