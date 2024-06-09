<script setup lang="ts">
import { reactive } from "vue";
import { ElMessage } from "element-plus";
const config = reactive({
  max: 3
});
const open = () => {
  ElMessage("ZTT.");
};
import { computed, ref } from "vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";

const language = ref("zh-cn");
const locale = computed(() => (language.value === "zh-cn" ? zhCn : en));

const toggle = () => {
  language.value = language.value === "zh-cn" ? "en" : "zh-cn";
};
defineOptions({
  name: ""
});
</script>

<!-- <template>
  <div>test</div>
</template>
-->
<style lang="scss" scoped></style>

<template>
  <div class="">
    <span>每行24分栏布局</span>
    <el-row :gutter="20">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <el-config-provider :message="config">
          <el-button @click="open">测试</el-button>
        </el-config-provider>
      </el-col>
    </el-row>
  </div>

  <div>
    <el-button mb-2 @click="toggle">Switch Language</el-button>
    <br />

    <el-config-provider :locale="locale">
      <el-table mb-1 :data="[]" />
      <el-pagination :total="100" />
    </el-config-provider>
  </div>
</template>
