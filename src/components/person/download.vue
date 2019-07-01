<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="500px">
      <div>
        <img src="../../../static/img/baoban_bg.png" alt="" width="100%">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="mini">关 闭</el-button>
        <el-button type="primary" @click="dialogVisible = false" size="mini">下 载</el-button>
     </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'download',
    data () {
      return {
        dialogVisible: false
      }
    },
    methods: {
      show (row) {
        this.dialogVisible = true
        console.log('---', row);
      }
    },
  }
</script>

<style scoped>

</style>
