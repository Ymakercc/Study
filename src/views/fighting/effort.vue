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
import { ref, reactive, computed } from 'vue';
import { getUserList } from '@/api/shopList'; // 引入封装好的函数
import searchIcon from '@/assets/svg/search.svg?component';
import Card from './components/Card.vue';
// const userlist = ref([]);
// const Alltotal = ref(0);

// getUserList().then(res => {
//   Alltotal.value = res.data.users.length;
//   userlist.value = res.data.users;
// });

// const state = reactive({
//   page: 1,
//   limit: 10,
//   total: Alltotal.value,
// });

// const tableData = () => {
//   return userlist.value.filter(
//     (item, index) =>
//       index < state.page * state.limit &&
//       index >= state.limit * (state.page - 1)
//   );
// };

// const handleCurrentChange = e => {
//   state.page = e;
// };

// const handleSizeChange = e => {
//   state.limit = e;
// };
const userlist = ref([]);
const Alltotal = ref(0);

getUserList().then(res => {
  Alltotal.value = res.data.users.length;

  userlist.value = res.data.users;
  state.total = Alltotal.value; // 更新分页的总数
  console.log(Alltotal.value);
  console.log(state.total);
});

const state = reactive({
  page: 1,
  limit: 5,
  total: Alltotal.value,
  pageSizes: [2, 5, 10],
});

const cards = ref([
  { title: '总订单', body: '555555', footer: '已完成' },
  { title: '已完成', body: '789012', footer: '待处理' },
  { title: '已取消', body: '789012', footer: '待处理' },
  { title: '待收款', body: '789012', footer: '待处理' },
  { title: '待发货', body: '789012', footer: '待处理' },
  { title: '待收货', body: '123456', footer: '处理中' },
]);

const tableData = computed(() => {
  return userlist.value.slice(
    (state.page - 1) * state.limit,
    state.page * state.limit
  );
});

const handleCurrentChange = e => {
  state.page = e;
};

const handleSizeChange = e => {
  state.limit = e;
  state.page = 1; // 当修改每页显示条数时，重置到第一页
};

const handleDeliver = row => {
  row.mg_state = true;
};

//方法生效了但是应为数据是mock模拟的，mock里面没有写响应删除的参数因此视图不会跟新
const handleDelete = index => {
  tableData.value.splice(index, 1);
  alert('操作已经成功，没有写向后端发起删除的请求，数据一致性，视图不更新');
  console.log('1');
};
</script>

<<<<<<< HEAD
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
=======
<template>
  <div class="dingdanleibaio">
    <el-row class="elrow">
      <el-col>
        <el-card
          body-style=" 
          display: flex;
          justify-content: space-between;
          align-items: center;"
        >
          <template #header>Yummy hamburger</template>
          <!-- card body -->
          <!-- <div class="card">
            <div class="icon">
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z"
                ></path>
              </svg>
            </div>
            <strong> 全部订单 </strong>
            <div class="card__body">
              Get UI elements that help you stand out.
            </div>
            <span>Follow us</span>
          </div> -->
          <div v-for="(card, index) in cards" :key="index">
            <Card :title="card.title" :body="card.body" :footer="card.footer" />
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <el-card>
          <template #header>订单列表</template>
          <el-row :gutter="20" style="padding-bottom: 10px">
            <el-col :span="8">
              <el-input placeholder="请输入内容">
                <template #append>
                  <searchIcon></searchIcon>
                </template>
              </el-input>
            </el-col>
            <el-col :span="4">
              <el-button type="primary">添加用户</el-button>
            </el-col>
          </el-row>
          <!-- card body -->
          <el-table :data="tableData" border stripe>
            <el-table-column type="index"></el-table-column>
            <el-table-column label="姓名" prop="username"></el-table-column>
            <el-table-column
              label="订单号"
              prop="Ordernumber"
            ></el-table-column>
            <el-table-column
              label="购买时间"
              prop="Timeofpurchase"
            ></el-table-column>
            <el-table-column
              label="付款时间"
              prop="Paymenttime"
            ></el-table-column>
            <el-table-column label="状态" prop="mg_state">
              <template v-slot="scope">
                <el-switch v-model="scope.row.mg_state" />
              </template>
            </el-table-column>
            <el-table-column label="操作" width="270px">
              <template v-slot="scope">
                <el-button
                  type="primary"
                  size="default"
                  @click="handleDeliver(scope.row)"
                  >发货</el-button
                >
                <el-button type="primary" size="default">详情</el-button>
                <el-button
                  type="primary"
                  size="default"
                  @click="handleDelete(scope.$index)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <!-- 页面区域 -->
          <el-pagination
            layout="total,prev, pager, next, sizes"
            :total="state.total"
            :page-size="state.limit"
            :current-page="state.page"
            :page-sizes="state.pageSizes"
            style="padding-top: 10px"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
          ></el-pagination>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.elrow {
  padding-bottom: 10px;
}

.card {
  --bg: #f7f7f8;
  --hover-bg: #ffe5f4;
  --hover-text: #e50087;
  max-width: 23ch;
  text-align: center;
  background: var(--bg);
  padding: 1.5em;
  padding-block: 1.8em;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition:
    0.3s cubic-bezier(0.6, 0.4, 0, 1),
    transform 0.15s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
}

.card__body {
  color: #464853;
  line-height: 1.5em;
  font-size: 1em;
}

.card > :not(span) {
  transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1);
}

.card > strong {
  display: block;
  font-size: 1.4rem;
  letter-spacing: -0.035em;
}

.card span {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--hover-text);
  border-radius: 5px;
  font-weight: bold;
  top: 100%;
  transition: all 0.3s cubic-bezier(0.6, 0.4, 0, 1);
}

.card:hover span {
  top: 0;
  font-size: 1.2em;
}

.card:hover {
  background: var(--hover-bg);
}

.card:hover > div,
.card:hover > strong {
  opacity: 0;
}
</style>
>>>>>>> main
