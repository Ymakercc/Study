<script setup lang="ts">
defineOptions({
  name: 'Welcome',
});
import BaseEcharts from '@/components/baseEcharts/index.vue';
import { getText } from '@/api/get';
import { ref } from 'vue';

//掉用封装好厚的API以及Axios
const Textmeseage = ref<string>();
getText()
  .then(response => {
    Textmeseage.value = response.data.content;
    console.log(Textmeseage.value);
  })
  .catch(() => {
    console.log('erro');
  });
const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      emphasis: {
        focus: 'series',
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'Email',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Union Ads',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series',
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video Ads',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series',
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Search Engine',
      type: 'bar',
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      emphasis: {
        focus: 'series',
      },
      markLine: {
        lineStyle: {
          type: 'dashed',
        },
        data: [[{ type: 'min' }, { type: 'max' }]],
      },
    },
    {
      name: 'Baidu',
      type: 'bar',
      barWidth: 5,
      stack: 'Search Engine',
      emphasis: {
        focus: 'series',
      },
      data: [620, 732, 701, 734, 1090, 1130, 1120],
    },
    {
      name: 'Google',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 290, 230, 220],
    },
    {
      name: 'Bing',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series',
      },
      data: [60, 72, 71, 74, 190, 130, 110],
    },
    {
      name: 'Others',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series',
      },
      data: [62, 82, 91, 84, 109, 110, 120],
    },
  ],
};

const langugeOption = {
  title: {
    text: '代码量',

    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};
</script>

<template>
  <div class="welcome">
    <el-row :gutter="10" class="elrow" type="flex">
      <el-col :span="8" :offset="0">
        <el-card shadow="hover" :body-style="{ padding: '20px' }">
          <template #header>
            <div class="flex flex-center">
              <span>
                <el-avatar size="large" />
              </span>
              <div class="flex flex-col ml-4">
                <span class="text-2xl opacity-80"> Hello, Admin</span>
                <span class="mt-2 opacity-50">当前角色：超级管理员</span>
              </div>
            </div>
          </template>
          <!-- card body -->
          <p class="opacity-60">
            {{ Textmeseage }}
          </p>
          <p class="mt-1 text-right text-sm text-12 opacity-40">
            —— 查尔斯·史考伯
          </p>
        </el-card>
      </el-col>
      <el-col :span="16" :offset="0">
        <el-card
          shadow="hover"
          style="height: 100%"
          :body-style="{ padding: '20px' }"
        >
          <template #header>
            <div>
              <span class="text-lg"
                ><!-- card title -->
                ✨ 欢迎使用<b style="letter-spacing: 2px"> 数据库系统</b>
              </span>
            </div>
          </template>
          <!-- card body -->
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12" :offset="0">
        <el-card shadow="hover" :body-style="{ padding: '20px' }">
          <template #header>
            <div>
              <span class="text-lg"
                ><!-- card title -->
                💯 数据展示
              </span>
            </div>
          </template>
          <!-- card body -->
          <div :style="{ width: '100%', height: '360px' }">
            <BaseEcharts :options="option" />
          </div>
        </el-card>
      </el-col>

      <el-col :span="12" :offset="0">
        <el-card shadow="hover" :body-style="{ padding: '20px' }">
          <template #header>
            <div>
              <span class="text-lg"
                ><!-- card title -->
                🛠️ 项目语言组成
              </span>
            </div>
          </template>
          <!-- card body -->
          <div :style="{ width: '100%', height: '360px' }">
            <BaseEcharts :options="langugeOption" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.elrow {
  padding: 10px 0px;
  display: flex;
  flex-wrap: wrap;
}
.items-center {
  align-items: center;
}
.flex {
  display: flex;
}
</style>
