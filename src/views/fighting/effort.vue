<script setup lang="ts">
import { reactive } from 'vue';
import { ElMessage } from 'element-plus';
const config = reactive({
  max: 3,
});
const open = () => {
  ElMessage('ZTT.');
};
import { computed, ref } from 'vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import en from 'element-plus/dist/locale/en.mjs';

const language = ref('zh-cn');
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en));

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn';
};
defineOptions({
  name: '',
});
</script>

<!-- <template>
  <div>test</div>
</template>
-->
<style lang="scss" scoped></style>

<template>
  <div class="effort">
    <el-row :gutter="20" class="elrow" type="flex">
      <el-col :span="24" :offset="0">
        <el-card shadow="hover" :body-style="{ padding: '150px' }">
          <template #header>
            <div>
              <span>每行24分栏布局</span>
            </div>
          </template>
          <!-- card body -->
        </el-card>

        <el-config-provider :message="config">
          <el-button @click="open">测试</el-button>
        </el-config-provider>
      </el-col>
    </el-row>
  </div>

  <div>
    <el-button mb-2 @click="toggle">切换语言</el-button>
    <br />

    <el-config-provider :locale="locale">
      <el-table mb-1 :data="[]" />
      <el-pagination :total="100" />
    </el-config-provider>
  </div>
</template>
