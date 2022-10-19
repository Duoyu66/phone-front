import axios from "axios"
//利用axios方法创造一个axios实例
const  service = axios.create({
    baseURL:"/api",
    timeout:5000
})
//请求拦截器
service.interceptors.request.use((config)=>{
 return config;
});
//配置相应拦截器
service.interceptors.response.use((res)=>{
    return res.data;
},(error => {
    console.log("响应失败"+error);
    return Promise.reject(new Error('fail'));;
}));

export default service