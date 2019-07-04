<template>
  <div>
    <el-dialog
      title="我的保单"
      :visible.sync="dialogVisible"
      width="650px">
      <div id="down" ref="down" class="down-content">

        <el-form ref="form" :model="form" label-width="90px" class="form-content">
          <el-form-item label="会员：">
           {{form.realName}}
          </el-form-item>
          <el-form-item label="保障编号：">
           <span v-if="form.payNum">{{form.payNum.slice(-5)}}</span>
          </el-form-item>
          <el-form-item label="保障日期：">
           {{form.receiveTime}}
          </el-form-item>
          <el-form-item label="身份证号：">
           {{form.idNum}}
          </el-form-item>
          <el-form-item label="保障金额：">
           {{form.amount}} <span v-if="form.amount">INU TOKEN</span>
          </el-form-item>
          <el-form-item label="等待期：">
           180天
          </el-form-item>
          <el-form-item label="互助范围：">
            {{form.receiveTime.slice(0, 10)}} - {{endTime(form.receiveTime.slice(0, 10), form.year)}}
          </el-form-item>
        </el-form>
        <img src="../../../static/img/baoban_bg.png" alt="" width="100%" class="bg-img">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="mini">关 闭</el-button>
        <el-button type="primary"  @click="download()" size="mini">下 载</el-button>
     </span>
    </el-dialog>
  </div>
</template>

<script>
  import html2canvas from 'html2canvas'
  import moment from 'moment'
  export default {
    name: 'download',
    data () {
      return {
        dialogVisible: false,
        rowData: null,
        form: {
          realName: '',
          payNum:'',
          receiveTime: '',
          idNum: '',
          amount:''
        },
        title: ''
      }
    },
    methods: {
      show (row, title) {
        this.dialogVisible = true
        this.title = title
        this.$set(this.$data, 'form', row)
      },
      download(){
        let element = document.getElementById('down');
        html2canvas(element ,{
          backgroundColor: null,
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
      },
      endTime(time){
        return moment(time).add(1, 'year').format('YYYY-MM-DD')
      }
    },
  }
</script>

<style scoped>
.down-content{
  width: 600px;
  height: 820px;
  position: relative;
}
.form-content{
  padding: 350px 0 0 120px;
  position: absolute;
  z-index: 99;
}
.bg-img{
  position: absolute;
  top: 0;
  z-index: 20;
}
.form-content >>> .el-form-item{
  margin-bottom: 0;
}
.form-content >>> .el-form-item__label{
  color: #847D78;
  font-weight: bold;
}
.form-content >>> .el-form-item__content{
  color: #847D78;
}
</style>
