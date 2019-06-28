<template>
  <div>
    <defaultHeader isHome="person"></defaultHeader>
    <myAccount></myAccount>
  </div>

</template>

<script>
  import defaultHeader from '../home/header'
  import myAccount from './my_account'
  export default {
    name: 'person_index',
    components: {defaultHeader, myAccount}
  }
</script>

<style scoped>
</style>
