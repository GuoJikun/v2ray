<template>
  <header class="header">
    <div class="header-body">
      <span>v2ray</span>
    </div>
    <div class="header-operate">
      <el-icon :size="12" class="header-operate-btn">
        <Minus></Minus>
      </el-icon>
      <el-icon :size="14" class="header-operate-btn">
        <FullScreen></FullScreen>
      </el-icon>
      <el-icon :size="16" class="header-operate-btn">
        <Close></Close>
      </el-icon>
    </div>
  </header>
</template>

<script>
import { FullScreen, Minus, Close } from "@element-plus/icons-vue";

export default {
  name: "App",
  components: { FullScreen, Minus, Close },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  background-color: rgba(12, 47, 105, 1);
  color: white;
  height: 32px;
  align-content: center;
  align-items: center;
  &-body {
    padding-left: 12px;
  }
  &-title {
    font-size: 12px;
  }
  &-operate {
    display: flex;
    align-content: center;
    align-items: center;
    &-btn {
      color: white;
      height: 32px;
      width: 56px;
      background-color: transparent;
      transition: background-color 0.2s;
      &:hover {
        background-color: rgba($color: #ffffff, $alpha: 0.1);
      }
      &:last-child:hover {
        background-color: rgba($color: red, $alpha: 0.65);
      }
    }
  }
}
</style>
