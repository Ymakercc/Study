import { http } from "@/utils/http";
 import { ApiObject } from "./utils";

// params传参
// export const textRequest = (params?: object) => {
//   return http.request("put", "/xxx", { params });
// };

// 定义 login 接口返回值类型为 UserResult
export type TextResult = {
  /** 是否请求成功 */
  success: boolean;
  data: {
    // 规范返回数据类型，在postman里面调试好后查看自己的返回数据
    /** 用户名 */
    //username: string;
    /** 当前登陆用户的角色 */
    //roles: Array<string>;
    /** `token` */
    //accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    //refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    //expires: Date;
  };
};

//data传参
  export const getText = (data?: object) => {
    //类型为 any 不是很规范，建议写一个接口来规范类型
    return http.request<any>("get",ApiObject.literatureapi, { data });
};
  
export const getWeather = (data?: object) => {
    return http.request<any>("get",ApiObject.weatherapi , { data });
  }
