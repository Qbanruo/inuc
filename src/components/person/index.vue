<template>
  <div>
    <defaultHeader isHome="person"></defaultHeader>
    <myAccount></myAccount>
    <generalize></generalize>
    <voucher></voucher>
    <defaultFooter style="margin-top: 50px"></defaultFooter>
  </div>

</template>

<script>
  import defaultHeader from '../home/header'
  import myAccount from './my_account'
  import generalize from './generalize'
  import voucher from './voucher'
  import defaultFooter from '../home/footer'
  export default {
    name: 'person_index',
    components: {defaultHeader, myAccount, generalize, voucher, defaultFooter}
  }
</script>

<style scoped>
</style>
