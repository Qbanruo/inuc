<template>
  <el-header class="header" :class="[isHome === 'home' ? 'home-header' : 'other-header']" height="auto">
    <div class="header-width">
      <el-row :gutter="20">
        <el-col :xs="4" :sm="2" :md="3" :lg="2" :xl="2" class="logo">
          <div v-if="isHome === 'home'">
            <img src="../../../static/img/logo.png" alt="">
          </div>
          <div v-else>
            <img src="../../../static/img/logo_blue.png" alt="">
          </div>
        </el-col>
        <el-col :xs="20" class="hidden-sm-and-up">
          <div class="menu-icon" :class="[isHome === 'home' ? 'home-menu' : 'other-menu']" >
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item>产品与服务</el-dropdown-item>
                <el-dropdown-item>联系我们</el-dropdown-item>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item> <a :href="loginHref">请登录</a></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
        <el-col :xs="20" :sm="17" :md="18" :lg="18" :xl="17" class="hidden-xs-only">
          <div class="nav">
            <ul>
              <li :class="[isHome === 'home' ? 'active' : '']" @click="$router.push('/')">首页</li>
              <li @click="$router.push('/')"> <a href="#our" :class="[isHome === 'home' ? 'color1' : 'color2']">产品与服务</a></li>
              <li>
                <el-popover
                  placement="bottom"
                  v-model="visible">
                  <div>
                    <img :src="qrCode" alt="">
                  </div>
                  <span slot="reference">联系我们</span>
                </el-popover>

              </li>
              <li :class="[isHome === 'person' ? 'active' : '']" @click="$router.push('/person')">个人中心</li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="5" :sm="4" :md="3" :lg="4" :xl="5"  class="hidden-xs-only">
           <span class="login" @click="login()">{{loginText}}</span>
        </el-col>
      </el-row>
    </div>
  </el-header>
</template>

<script>
  import 'element-ui/lib/theme-chalk/display.css';
  import api from '../../common/api'
  import {extractQueryParams} from '../../common/utils'
  export default {
    name: 'topHeader',
    data () {
      return {
        clientWidth: '',
        showNavIcon: false,
        visible: false,
        qrCode: '',
        code: null,
        loginHref: '',
        loginText: '请登录'
      }
    },
    props: {
      isHome: String
    },
    created(){
      this.getQrCode()
      this.code = this.$route.query.code
      if(this.code){
        this.getSweepCodeLogin()
      }
    },
    methods: {
      getQrCode () {
        api.getPublicNumImg().then(s => {
          this.qrCode = s.data
        })
      },
      login(){
        let href = window.location.origin + window.location.pathname
        let loginHref = `https://reitschain.com/code/login?redirect_url=${href}`
        window.location.href = loginHref
      },
      getSweepCodeLogin(){
        api.getSweepCodeLogin({code: this.code}).then(s => {
          if(s.success){
            this.loginText = '已登录'
            window.sessionStorage.setItem('token', s.token);
            window.sessionStorage.setItem('personInfo', JSON.stringify(s.data));
          }
        })
      },
    },
    mounted() {
      const that = this;
      that.clientWidth = `${document.documentElement.clientWidth}`;
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
  @import "http://at.alicdn.com/t/font_1259051_bdmfvwpen2e.css";
  .logo{
    margin-top: 10px;
  }
  .logo img{
    width: 42px;
  }
  .header-width{
    margin: auto;
  }
  .login{
    color: #5ac8c9;
    border: 1px solid #5ac8c9;
    border-radius: 12px;
    padding: 2px 10px;
    margin-top: 22px;
    display: inline-block;
    float: right;
  }
  .nav ul{
    float: right;
  }
  .nav ul li {
    float: left;
    list-style-type: none;
    padding: 10px 25px;
  }
  .home-header .nav ul li{
    color: #fff;
  }
  .home-header .nav ul li:hover{
    background: #222;
  }
  .color1{
    color: #fff!important;
  }
  .color2{
    color: #333;
  }
  .other-header{
    border-bottom: 1px solid #ddd;
    background: #fff;
  }
  .active{
    color: #5ac8c9!important;
  }
  .menu-icon{
    text-align: right;
    padding-top: 8px;
  }
  .home-header .home-menu >>> .el-dropdown{
    color: #fff;
  }
  .icon-fs{
    font-size: 22px;
  }
  @media (max-width: 1200px) {

  }
  @media (max-width: 1024px) {

  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {

    .nav ul li {
      padding: 10px 15px;
    }
  }
  @media (max-width: 767px) {
    .login{
      margin-top: 10px;
      font-size: 12px
    }
    .logo img{
      width: 32px;
    }
    .logo{
      margin-top: 5px;
    }
  }
</style>
