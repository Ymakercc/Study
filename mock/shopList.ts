
import { defineFakeRoute } from "vite-plugin-fake-server";
export default defineFakeRoute([
  {
    method: 'post',
    url: '/get-shop-list',
    response: () => {
      return {
        success: true,
        data: {
          users: [
            {
              "Id": 1,
              "username": "John Doe",
              "Ordernumber": "10086332100",
              "Timeofpurchase": "2019-03-14 16:42",
              "Paymenttime": "2019-03-14 19:29",
              "mg_state": true
            },
            {
              "Id": 2,
              "username": "Jane Smith",
              "Ordernumber": "10086332101",
              "Timeofpurchase": "2019-03-14 16:42",
              "Paymenttime": "2019-03-14 19:29",
              "mg_state": false
            },
            {
              "Id": 3,
              "username": "Alice Johnson",
              "Ordernumber": "10086332102",
              "Timeofpurchase": "2019-03-14 16:42",
              "Paymenttime": "2019-03-14 19:29",
              "mg_state": true
            },
            {
              "Id": 4,
              "username": "Bob Brown",
              "Ordernumber": "10086332103",
              "Timeofpurchase": "2019-03-14 16:42",
              "Paymenttime": "2019-03-14 19:29",
              "mg_state": false
            },
            {
              "Id": 5,
              "username": "Charlie Davis",
              "Ordernumber": "10086332104",
              "Timeofpurchase": "2019-03-14 16:42",
              "Paymenttime": "2019-03-14 19:29",
              "mg_state": true
            },
            {
              "Id": 6,
              "username": "Charlie Davis",
              "Ordernumber": "10086332104",
              "Timeofpurchase": "2019-03-14 16:42",
              "Paymenttime": "2019-03-14 19:29",
              "mg_state": true
            },
            {
              "Id": 7,
              "username": "Charlie Davis",
              "Ordernumber": "10086332104",
              "Timeofpurchase": "2019-03-14 16:42",
              "Paymenttime": "2019-03-14 19:29",
              "mg_state": true
            }
          ]
        },
      };
    },
  },
]);