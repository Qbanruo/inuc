<template>
  <div style="padding: 5% 0">
    <div class="title-content">
      <span class="title">{{title}}</span>
      <div class="sub-title">{{subTitle}}</div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'default_title',
    props: {
      title: String,
      subTitle: String
    }
  }
</script>

<style scoped>
  .title-content {
    border: 1px solid #c8c8c8;
    width: 250px;
    margin: auto;
    text-align: center;
  }

  .title {
    font-size: 24px;
    color: #333;
    line-height: 2.5;
    display: block;
  }

  .sub-title {
    color: #c8c8c8;
    font-size: 14px;
    width: 200px;
    background:#fff;
    margin:0 auto -10px;
  }
</style>
