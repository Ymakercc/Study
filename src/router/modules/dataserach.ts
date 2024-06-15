// 最简代码，也就是这些字段必须有
export default {
  path: "/dataserach",
  meta: {
    title: "数据可视化",
    icon:'teenyicons:area-chart-outline'
  },
  children: [
    {
      path: "/dataserach/index",
      name: "Dataserach",
      component: () => import("@/views/dataserach/index.vue"),
      meta: {
        title: "商品销售与访问数据",
        // 通过设置showParent为true，显示父级
        showParent: true
      }
    }
  ]
};

