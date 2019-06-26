<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
.pro-width, .header-width{
  width: 1200px;
}
@media (max-width: 1200px) {
  .header-width{
    width: 1000px;
  }
  .pro-width{
    width: 1000px;
  }
}
@media (max-width: 1024px) {
  .header-width{
    width: 90%;
  }
  .pro-width{
    width: 90%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1000px) {
  .header-width{
    width: 95%;
  }
  .pro-width{
    width: 95%;
  }
}
@media (max-width: 767px) {
  .header-width, .pro-width{
    width: 90%;
  }
}

</style>
