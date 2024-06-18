<script setup lang="ts">
defineOptions({
  name: 'weather',
});
import { getWeather } from '@/api/get';
import { ElMessage } from 'element-plus';
import { onMounted, ref } from 'vue';

// 天气数据
const weatherData = ref<{
  fengli: string;
  week: string;
  fengxaing: string;
  type: string;
  high: string;
}>({
  fengli: '',
  week: '',
  fengxaing: '',
  type: '',
  high: '',
});

getWeather().then(response => {
  weatherData.value = response.data;
  console.log(weatherData.value);
});

// 报错信息
const onError = (message: string) => {
  ElMessage({
    message: message,
    grouping: true,
    type: 'error',
  });
  console.error(message);
};

onMounted(() => {
  // 调用获取天气
  // getWeatherData();
});
</script>

<template>
  <div v-if="weatherData" class="weather">
    <span>成都&nbsp; </span>
    <span>{{ weatherData.type }}&nbsp;</span>
    <span>{{ weatherData.high }}</span>
    <span class="sm-hidden"> &nbsp;{{ weatherData.fengxaing }}</span>
    <span class="sm-hidden">{{ weatherData.fengli }}风&nbsp;</span>
  </div>
  <div v-else class="weather">
    <span>天气数据获取失败</span>
  </div>
  <div></div>
</template>

<style lang="scss" scoped></style>
