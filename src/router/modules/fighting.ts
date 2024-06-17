// 最简代码，也就是这些字段必须有
export default {
  path: "/fighting",
  meta: {
    title: "励志",
    icon: "streamline:shopping-bag-hand-bag-1-shopping-bag-purse-goods-item-products",
  },
  children: [
    {
      path: "/fighting/index",
      name: "Fighting",
      component: () => import("@/views/fighting/index.vue"),
      meta: {
        title: "订单管理"
      }
    },
    {
      path: "/fighting/effort",
      name: "Effort",
      component: () => import("@/views/fighting/effort.vue"),
      meta: {
        title: "发货管理"
      }
    }
  ]
}satisfies RouteConfigsTable;
