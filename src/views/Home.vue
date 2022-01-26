<template>
  <div class="home">
    <p>服务器列表</p>
    <el-table
      :data="tableData"
      tooltip-effect="dark"
      @row-contextmenu="showNativeContextmenu"
    >
      <el-table-column label="类型" prop="type" width="70px"></el-table-column>
      <el-table-column label="别名"></el-table-column>
      <el-table-column label="地址"></el-table-column>
      <el-table-column label="端口" width="70px"></el-table-column>
      <el-table-column label="加密方式"></el-table-column>
      <el-table-column label="传输协议"></el-table-column>
      <el-table-column label="传输层安全" width="100px"></el-table-column>
      <el-table-column label="订阅" width="60px"></el-table-column>
      <el-table-column label="测试结果"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
export default {
  name: "Home",
  data() {
    return {
      active: null,
      tableData: [
        {
          type: "vMess",
        },
        {
          type: "vLess",
        },
      ],
    };
  },
  mounted() {
    ipcRenderer.on("context-menu-command", (e, command) => {
      console.log(e, command);
    });
  },
  methods: {
    showNativeContextmenu(row) {
      console.log(row);
      ipcRenderer.send("show-context-menu", row.type);
    },
  },
};
</script>
