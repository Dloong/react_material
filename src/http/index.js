import axios from 'axios'
import loading from "../components/loading"


// 添加请求拦截器
// axios config
axios.defaults.timeout = 30000;
axios.defaults.baseURL = process.env.REACT_APP_BASEURL + "/api/v1";

axios.interceptors.request.use(
  config => {
    return config;
  },
  loading.show(),
  function(error) {
    loading.done()
    return Promise.reject(error);
  }
);
// 添加响应拦截器
axios.interceptors.response.use(
  loading.done(),
  response => {
    if (response.data.code !== 200) {}
    return response;
  },
  error => {
    if (error.response.status === 401) {
      return error.response;
    }
    if (error.message.includes("timeout")) {
      return error.response;
    }

    return Promise.reject(error);
  }
);
const http= axios.create()
export default http