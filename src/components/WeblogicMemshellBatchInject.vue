<template>
  <div>
    <el-upload
        class="upload-demo"
        action=""
        :on-change="handleChange"
        :auto-upload="false"
        drag
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text" style="display: flex; justify-content: center; align-items: center;">
        将包含url的文件（url一行一个）拖到此处，或<em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip" style="display: flex; justify-content: center; align-items: center;">只能上传.txt文件，且不超过500kb</div>
    </el-upload>

    <el-form :model="form"  label-width="120px">

      <el-alert title="下面的内容如果不填写，则会自动随机生成！" type="info" show-icon /><br>
      <el-form-item label="className">
        <el-input v-model="form.className"></el-input>
      </el-form-item>
      <el-form-item label="newUri">
        <el-input v-model="form.newUri"></el-input>
      </el-form-item>
      <el-form-item label="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm" >尝试批量打入内存马</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="memshellData" style="width: 100%">
      <el-table-column prop="targetUrl" label="目标url"></el-table-column>
      <el-table-column prop="memshellUrl" label="冰蝎内存马url"></el-table-column>
      <el-table-column prop="memshellPassword" label="冰蝎内存马密码"></el-table-column>
      <el-table-column label="备注">
        <template #default="scope">
          <el-tag>{{ scope.row.note }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import {reactive, ref} from 'vue';
import axios from 'axios';
import {ElMessage} from 'element-plus';

const form = reactive({
  className: '',
  newUri: '',
  password: '',
});
const memshellData = ref([]);
const fileContent = ref('');

const handleChange = (file) => {
  let reader = new FileReader();
  if (typeof FileReader === "undefined") {
    ElMessage({
      type: "info",
      message: "您的浏览器不支持文件读取。"
    });
    return;
  }
  reader.readAsText(file.raw); // 读取文本文件
  reader.onload = function (e) {
    fileContent.value = e.target.result;
  };
}

const submitForm = async () => {
  const data = {
    fileContent: fileContent.value,
    className: form.className,
    newUri: form.newUri,
    password: form.password,
  };
  console.log(data)
  try {
    const response = await axios.post(`http://127.0.0.1:8080/weblogic/java/get-target-urls`, data);
    if (response.status === 200) {
      memshellData.value = response.data.map(item => ({
        targetUrl: item.details.targetUrl,
        memshellUrl: item.details.memshellUrl,
        memshellPassword: item.details.memshellPassword,
        note: item.status // 使用status作为备注
      }));
      console.log(memshellData.value)
      ElMessage({
        message: '上传成功',
        type: 'success',
      });
    } else {
      ElMessage({
        message: '上传失败',
        type: 'error',
      });
    }
  } catch (error) {
    console.error(error);
    ElMessage({
      message: '请求失败',
      type: 'error',
    });
  }
};
</script>

<style scoped>
.upload-demo {
  width: 100%;
  text-align: center;
}

.el-upload__text {
  color: #666;
  font-size: 14px;
  text-align: left;
}

.el-upload__tip {
  color: #999;
  font-size: 12px;
  text-align: left;
}
</style>
