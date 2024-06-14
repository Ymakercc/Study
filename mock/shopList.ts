
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
              "email": "john.doe@example.com",
              "mobile": "1234567890",
              "role_name": "管理员",
              "mg_state": true
            },
            {
              "Id": 2,
              "username": "Jane Smith",
              "email": "jane.smith@example.com",
              "mobile": "0987654321",
              "role_name": "用户",
              "mg_state": false
            },
            {
              "Id": 3,
              "username": "Alice Johnson",
              "email": "alice.johnson@example.com",
              "mobile": "1122334455",
              "role_name": "用户",
              "mg_state": true
            },
            {
              "Id": 4,
              "username": "Bob Brown",
              "email": "bob.brown@example.com",
              "mobile": "5566778899",
              "role_name": "管理员",
              "mg_state": false
            },
            {
              "Id": 5,
              "username": "Charlie Davis",
              "email": "charlie.davis@example.com",
              "mobile": "6677889900",
              "role_name": "用户",
              "mg_state": true
            }
          ]
        },
      };
    },
  },
]);