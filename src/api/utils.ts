const { VITE_BASE_URL,VITE_GODE_URL,KEY } = import.meta.env;
//在这里统一定义API接口，去不同请求的文件中引用
//API接口地址参考 https://api.vvhan.com/
//在调用接口时去postman查询使用接口的数据类型 调试工具下载地址：https://www.postman.com/
export const ApiObject = {
  jokeApi: VITE_BASE_URL + "/text/joke?type=json",
  literatureapi: VITE_BASE_URL + "/ian/wenxue?type=json",
  weatherApi:VITE_BASE_URL+'/weather?city=四川'
};
