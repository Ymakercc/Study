import { http } from "@/utils/http";

 type Result = {
   success: boolean;
   data?: {
     /** 列表数据 */
     users: Array<any>;
   };
 };

/** 卡片列表 */
export const getUserList = (params?: object) => {
  return http.request<Result>("post", "/get-shop-list", { params })
};

