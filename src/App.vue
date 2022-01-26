<template>
  <el-config-provider :size="size" :locale="locale">
    <!-- <v-header></v-header> -->
    <router-view></router-view>
  </el-config-provider>
</template>

<script>
// import Header from "@/components/header.vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";

export default {
  name: "App",
  // components: { "v-header": Header },
  data() {
    return {
      locale: zhCn,
      size: "default",
    };
  },
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
#app {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  scroll-behavior: smooth;
}
.el-table {
  --el-table-header-bg-color: #efefef !important;
}
</style>
