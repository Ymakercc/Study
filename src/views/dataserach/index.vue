<template>
  <div class="dataVisualize-box">
    <div class="card top-box">
      <div class="top-title">数据可视化</div>
      <el-tabs v-model="tabActive" class="demo-tabs" @tab-click="tabChange()">
        <el-tab-pane
          v-for="item in tab"
          :key="item.name"
          :label="item.label"
          :name="item.name"
        />
      </el-tabs>
      <div class="top-content">
        <el-row :gutter="40">
          <el-col class="mb40" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <div class="item-left sle">
              <span class="left-title">今日总交易额</span>
              <div class="img-box">
                <img src="./images/date.png" alt="" />
              </div>
              <!-- <span class="left-number">848.13</span> -->
              <AnimatedNumber
                v-if="animatedNumberStates"
                class="left-number"
                style="display: inline-block"
                duration="2000"
                :from="0"
                :to="itemNumber[0]"
              ></AnimatedNumber>
            </div>
          </el-col>
          <el-col class="mb40" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <div class="item-center">
              <div class="gitee-traffic traffic-box">
                <div class="traffic-img">
                  <img src="./images/add_person.png" alt="" />
                </div>
                <!-- <span class="item-value">999</span> -->
                <AnimatedNumber
                  v-if="animatedNumberStates"
                  class="item-value"
                  style="display: inline-block"
                  duration="2000"
                  :from="0"
                  :to="itemNumber[1]"
                ></AnimatedNumber>
                <span class="traffic-name sle">待结算订单</span>
              </div>
              <div class="gitHub-traffic traffic-box">
                <div class="traffic-img">
                  <img src="./images/add_team.png" alt="" />
                </div>
                <!-- <span class="item-value">220</span> -->
                <AnimatedNumber
                  v-if="animatedNumberStates"
                  class="item-value"
                  style="display: inline-block"
                  duration="2000"
                  :from="0"
                  :to="itemNumber[2]"
                ></AnimatedNumber>
                <span class="traffic-name sle">待审核订单</span>
              </div>
              <div class="today-traffic traffic-box">
                <div class="traffic-img">
                  <img src="./images/today.png" alt="" />
                </div>
                <!-- <span class="item-value">4521</span> -->
                <AnimatedNumber
                  v-if="animatedNumberStates"
                  class="item-value"
                  style="display: inline-block"
                  duration="2000"
                  :from="0"
                  :to="itemNumber[3]"
                ></AnimatedNumber>
                <span class="traffic-name sle">今日访问量</span>
              </div>
              <div class="yesterday-traffic traffic-box">
                <div class="traffic-img">
                  <img src="./images/book_sum.png" alt="" />
                </div>
                <!-- <span class="item-value">4002</span> -->
                <AnimatedNumber
                  v-if="animatedNumberStates"
                  class="item-value"
                  style="display: inline-block"
                  duration="2000"
                  :from="0"
                  :to="itemNumber[4]"
                ></AnimatedNumber>
                <span class="traffic-name sle">昨日访问量</span>
              </div>
            </div>
          </el-col>
          <el-col class="mb40" :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
            <div class="item-right">
              <div class="echarts-title">
                今日访问量 / 昨日访问量 访问量占比
              </div>
              <div class="book-echarts">
                <Pie
                  v-if="animatedNumberStates"
                  :value1="itemNumber[3]"
                  :value2="itemNumber[4]"
                  ref="pieRef"
                />
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="card bottom-box">
      <div class="bottom-title">总成交额走势柱状图</div>
      <div class="bottom-tabs">
        <el-tabs
          v-model="tabActive"
          class="demo-tabs"
          @tab-click="tabChangeCurve()"
        >
          <el-tab-pane
            v-for="item in tab"
            :key="item.name"
            :label="item.label"
            :name="item.name"
          />
        </el-tabs>
      </div>
      <div class="curve-echarts">
        <Curve v-if="curveStates" :valueList="itemNumber" ref="curveRef" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'dataserach',
});
import { ref } from 'vue';
import Pie from './components/pie.vue';
import Curve from './components/curve.vue';

const tabActive = ref<number>(1);
const itemNumber = ref<number[]>([]);
const animatedNumberStates = ref<boolean>(true);
const curveStates = ref<boolean>(true);
const randomNumber = () => {
  itemNumber.value = [];
  for (let index = 0; index < 9; index++) {
    itemNumber.value.push(Math.floor(Math.random() * 3300) + 1000);
  }
};
randomNumber();
const tab = [
  { label: '未来九日', name: 1 },
  { label: '近九日', name: 2 },
  { label: '近一月', name: 3 },
  { label: '近三月', name: 4 },
  { label: '近半年', name: 5 },
  { label: '近一年', name: 6 },
];
const tabChange = () => {
  animatedNumberStates.value = false;
  randomNumber();
  setTimeout(() => {
    animatedNumberStates.value = true;
  }, 0);
};
const tabChangeCurve = () => {
  curveStates.value = false;
  randomNumber();
  setTimeout(() => {
    curveStates.value = true;
  }, 0);
};
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
