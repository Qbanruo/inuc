<template>
  <div>
    <el-dialog
      title="我的保单"
      :visible.sync="dialogVisible"
      width="650px">
      <div id="down" ref="down" class="down-content">
        <el-form ref="form" :model="form" label-width="80px" class="form-content">
          <el-form-item label="会员">
           {{form.name}}
          </el-form-item>
          <el-form-item label="保障编号">
           {{form.name}}
          </el-form-item>
          <el-form-item label="保障日期">
           {{form.name}}
          </el-form-item>
          <el-form-item label="身份证号">
           {{form.name}}
          </el-form-item>
          <el-form-item label="保障金额">
           {{form.name}}
          </el-form-item>
          <el-form-item label="等待期">
           180天
          </el-form-item>
          <el-form-item label="互助范围">
            {{form.name}}
          </el-form-item>
        </el-form>
        <a :href="downImg" download="我的保单"><img :src="downImg" width="100%"/></a>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="mini">关 闭</el-button>
        <el-button type="primary"  @click="download()" size="mini" v-if="title === '下载'">下 载</el-button>
     </span>
    </el-dialog>
  </div>
</template>

<script>
  import html2canvas from 'html2canvas'
  export default {
    name: 'download',
    data () {
      return {
        dialogVisible: true,
        rowData: null,
        form: {
          name: ''
        },
        downImg: '',
        title: ''
      }
    },
    methods: {
      show (row, title) {
        this.dialogVisible = true
        this.title = title
        this.rowData = row
      },
      download(){
        let element = document.getElementById('down');
        html2canvas(element ,{
          backgroundColor: null,
          logging: false,
        }).then((canvas) => {
          let dataURL = canvas.toDataURL("image/png");
          this.fileDownload(dataURL)
        });
      },
      //下载图片
      fileDownload(downloadUrl) {
        let aLink = document.createElement("a");
        aLink.style.display = "none";
        aLink.href = downloadUrl;
        aLink.download = "我的保单.png";
        // 触发点击-然后移除
        document.body.appendChild(aLink);
        aLink.click();
        document.body.removeChild(aLink);
      }
    },
  }
</script>

<style scoped>
.down-content{
  width: 600px;
  height: 800px;
  background: url('../../../static/img/baoban_bg.png') no-repeat;
  background-size: 100%;
}
.form-content{
  padding: 350px 0 0 120px;
  width: 380px;
}
.form-content >>> .el-form-item{
  margin-bottom: 0;
}
</style>
