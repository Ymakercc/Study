<script setup lang="ts">
defineOptions({
  name: 'Pie',
});
import BaseEcharts from '@/components/baseEcharts/index.vue';
import { computed } from 'vue';

// 定义props

interface Pieprops {
  title?: string;
  data?: Array<any>;
  remainingStock?: string;
}
const props = defineProps<Pieprops>();

// 配置option
const chartOptions = computed(() => ({
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '80%',
    left: 'center',
  },
  series: [
    {
      name: '销售情况',
      type: 'pie',
      radius: ['60%', '50%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: props.data,
    },
  ],
}));
</script>

<template>
  <div>
    <div class="pie">
      <BaseEcharts :options="chartOptions"></BaseEcharts>
      <div class="text">{{ title }}</div>
      <div class="lost">剩余库存数量：{{ remainingStock }}件</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 50px;
  text-align: left;
  line-height: 50px;
  font-weight: bold;
  border-bottom: 1px gainsboro solid;
  margin-bottom: 5px;
}
.pie {
  width: 300px;
  height: 330px;
  padding: auto;
}

.text {
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin-top: -320px;
  margin-left: 100px;
  font-weight: bold;
}

.lost {
  width: 200px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin-top: 240px;
  margin-left: 50px;
  background-color: rgb(232, 232, 232);
  border-radius: 10px;
}
</style>
