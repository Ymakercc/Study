export default {
  path: "/list",
  redirect: "/list/card",
  meta: {
    icon: "ri:list-check",
    title: "产品管理",
    
  },
  children: [
    {
      path: "/list/card",
      name: "CardList",
      component: () => import("@/views/list/card/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "商品管理",
        showParent: true,
        roles:['admin']
      }
    }
  ]
} satisfies RouteConfigsTable;