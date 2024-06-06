// 最简代码，也就是这些字段必须有
export default {
  path: "/dataserach",
  meta: {
    title: "数据可视化"
  },
  children: [
    {
      path: "/dataserach/index",
      name: "Dataserach",
      component: () => import("@/views/dataserach/index.vue"),
      meta: {
        title: "访问数据",
        // 通过设置showParent为true，显示父级
        showParent: true
      }
    }
  ]
};
