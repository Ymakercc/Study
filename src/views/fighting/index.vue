<script setup lang="ts">
defineOptions({
  name: '',
});
import { ref, computed } from 'vue';
import Pie from './components/pie.vue';

const pies = ref([
  {
    title: '手机销量数据',
    data: [
      { value: 1048, name: '手机销量' },
      { value: 800, name: '数码产品销量' },
    ],
    remainingStock: '500',
  },
  {
    title: '手机销量数据',
    data: [
      { value: 1048, name: '手机销量' },
      { value: 800, name: '数码产品销量' },
    ],
    remainingStock: '500',
  },
  {
    title: '手机销量数据',
    data: [
      { value: 1048, name: '手机销量' },
      { value: 800, name: '数码产品销量' },
    ],
    remainingStock: '500',
  },
  {
    title: '手机销量数据',
    data: [
      { value: 1048, name: '手机销量' },
      { value: 800, name: '数码产品销量' },
    ],
    remainingStock: '500',
  },
  {
    title: '手机销量数据',
    data: [
      { value: 1048, name: '手机销量' },
      { value: 800, name: '数码产品销量' },
    ],
    remainingStock: '500',
  },
  {
    title: '手机销量数据',
    data: [
      { value: 1048, name: '手机销量' },
      { value: 800, name: '数码产品销量' },
    ],
    remainingStock: '500',
  },
  {
    title: '手机销量数据',
    data: [
      { value: 1048, name: '手机销量' },
      { value: 800, name: '数码产品销量' },
    ],
    remainingStock: '500',
  },
  {
    title: '手机销量数据',
    data: [
      { value: 1048, name: '手机销量' },
      { value: 800, name: '数码产品销量' },
    ],
    remainingStock: '500',
  },
]);
</script>

<template>
  <el-card>
    <template #header><span>产品销售信息统计</span> </template>
    <el-row class=".row-with-margin">
      <el-col v-for="(pie, index) in pies" :key="index" :span="6"
        ><Pie
          :title="pie.title"
          :data="pie.data"
          :remainingStock="pie.remainingStock"
        ></Pie
      ></el-col>
    </el-row>
  </el-card>
</template>

<style lang="scss" scoped>
.row-with-margin {
  margin-bottom: 20px;
}
</style>
