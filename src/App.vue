<template>
  <el-config-provider :size="size" :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script>
import zhCn from "element-plus/es/locale/lang/zh-cn";

export default {
  name: "App",
  data() {
    return {
      locale: zhCn,
      size: "default",
    };
  },
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
