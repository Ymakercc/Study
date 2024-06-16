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
      { value: 10000, name: '手机销量' },
      { value: 800, name: '数码产品销量' },
    ],
    remainingStock: '9813',
  },
  {
    title: '电脑办公数据',
    data: [
      { value: 10000, name: '电脑销量' },
      { value: 867, name: '办公产品销量' },
    ],
    remainingStock: '9133',
  },
  {
    title: '家用电器数据',
    data: [
      { value: 1345, name: '家用电器销量' },
      { value: 867, name: '库存量' },
    ],
    remainingStock: '867',
  },
  {
    title: '鞋帽服装数据',
    data: [
      { value: 345, name: '鞋帽销量' },
      { value: 260, name: '服装销量' },
    ],
    remainingStock: '58',
  },
  {
    title: '食品保健数据',
    data: [
      { value: 425, name: '食品销量' },
      { value: 160, name: '保健销量' },
    ],
    remainingStock: '258',
  },
  {
    title: '厨卫用具数据',
    data: [
      { value: 3321, name: '厨卫用具销量' },
      { value: 800, name: '库存量' },
    ],
    remainingStock: '2392',
  },
  {
    title: '家用百货数据',
    data: [
      { value:315, name: '家居用品销量' },
      { value: 210, name: '百货销量' },
    ],
    remainingStock: '105',
  },
  {
    title: '图书影像数据',
    data: [
      { value: 145, name: '图书销量' },
      { value: 110, name: '影像产品销量' },
    ],
    remainingStock: '25',
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
