<template>
  {{ tmp }}
  <el-table :data="tableData">
    <el-table-column label=""></el-table-column>
    <el-table-column label="类型"></el-table-column>
    <el-table-column label="别名"></el-table-column>
    <el-table-column label="地址"></el-table-column>
    <el-table-column label="端口"></el-table-column>
    <el-table-column label="加密方式"></el-table-column>
    <el-table-column label="传输协议"></el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Buffer } from "buffer";
export default defineComponent({
  data() {
    return {
      tableData: [],
      tmp: null as any,
    };
  },
  mounted() {
    const tmp: any = Buffer.from(
      "ew0KICAidiI6ICIyIiwNCiAgInBzIjogIm1hdHRrYXlkaWFyeS5jb2185Lit5Zu96aaZ5rivL+S4reWbveWPsOa5vihDTilDaGluYS9TaGVuemhlbi/lsI/kuJznmoTnqIvluo/mnKrog73nsr7lh4bor4bliKso5Y+v6IO95piv5Lit6L2s6IqC54K5KSIsDQogICJhZGQiOiAiY20tam0ub2t2cG4ueHl6IiwNCiAgInBvcnQiOiAiMjAwMDAiLA0KICAiaWQiOiAiYjAyOWM1YjgtMDIzYy00NTQ5LThlZDYtY2NhNDVhYWFiOWI4IiwNCiAgImFpZCI6ICIxIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ5b3V0dWJlLWF3ZWlrZWppIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiDQp9",
      "base64"
    ).toString();
    this.tmp = JSON.stringify(JSON.parse(tmp), null, 2);
  },
});
</script>
