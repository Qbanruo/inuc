<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="500px">
      <div id="down" ref="down" style="width: 100%">123123123
        <ul>
          <li>会员</li>
          <li>保障编号</li>
          <li>会员</li>
          <li>会员</li>
        </ul>
        <!--<img src="../../../static/img/baoban_bg.png" alt="" width="100%">-->
        <el-form v-if="false" ref="form" :model="form" label-width="80px">
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
        <el-button type="primary"  @click="download()" size="mini">下 载</el-button>
     </span>
    </el-dialog>
  </div>
</template>

<script>
  import html2canvas from 'html2canvas'
  import jsPDF from 'jspdf'
  export default {
    name: 'download',
    data () {
      return {
        dialogVisible: true,
        rowData: null,
        form: {
          name: ''
        },
        downImg: ''
      }
    },
    methods: {
      show (row) {
        this.dialogVisible = true
        this.rowData = row
      },
      download(){
        let element = document.getElementById('down');
        html2canvas(element ,{
          backgroundColor: null,
          logging: false,
          // useCORS: true
        }).then((canvas) => {
          let dataURL = canvas.toDataURL("image/png");
          // this.downImg = dataURL;
          console.log(dataURL);
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

</style>
