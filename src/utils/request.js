//引入 axios
//封装统一的baseURL
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/api/v1";
export default axios;