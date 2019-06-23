<template>
  <el-header class="header">
    <div class="header-width">
      <el-row :gutter="20">
        <el-col :xs="4" :sm="2" :md="3" :lg="2" :xl="2" class="logo">
          <div>
            <img src="/static/img/logo.png" alt="">
          </div>
        </el-col>
        <el-col :xs="5"class="nav-icon hidden-sm-only">
          菜单
        </el-col>
        <el-col :xs="20" :sm="17" :md="18" :lg="18" :xl="17" class="hidden-xs-only">
          <div class="nav">
            <ul>
              <li class="active">首页</li>
              <li>产品与服务</li>
              <li>联系我们</li>
              <li>个人中心</li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="8" :sm="4" :md="3" :lg="4" :xl="5">
          <span class="login">请登录</span>
        </el-col>
      </el-row>
    </div>
  </el-header>
</template>

<script>
  import 'element-ui/lib/theme-chalk/display.css';
  export default {
    name: 'topHeader',
    data () {
      return {
        activeIndex: '/',
        mode: 'horizontal',
        clientWidth: '',
        showNavIcon: false
      }
    },
    mounted() {
      // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
      const that = this;
      that.clientWidth = `${document.documentElement.clientWidth}`;
      console.log('----', that.clientWidth)
    },
    watch: {
      clientWidth (val) {
        this.clientWidth = val
        if(this.clientWidth < 768){
          this.showNavIcon = true
        } else {
          this.showNavIcon = false
        }
      }
    }
  }
</script>

<style scoped>
  .logo{
    margin-top: 10px;
    border: 1px solid #fff;
  }
  .logo img{
    width: 42px;
  }
  .header-width{
    width: 1200px;
    margin: auto;
  }
  .login{
    color: #5ac8c9;
    border: 1px solid #5ac8c9;
    border-radius: 12px;
    padding: 2px 10px;
    margin-top: 25px;
    display: inline-block;
    float: right;
  }
  .nav ul{
    float: right;
  }
  .nav ul li {
    float: left;
    color: #fff;
    list-style-type: none;
    padding: 10px 25px;
  }
  .nav ul li:hover{
    background: #222;
  }
  .active{
    color: #5ac8c9!important;
  }
  .nav-icon{
    color: #fff;
  }
  @media (max-width: 1200px) {
    .header-width{
      width: 1000px;
    }
  }
  @media (max-width: 1024px) {
    .header-width{
      width: 90%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    .header-width{
      width: 95%;
    }
    .nav ul li {
      padding: 10px 15px;
    }
  }
  @media (max-width: 767px) {
    .header-width{
      width: 100%;
    }
  }
</style>
