import axios  from './request'; // 导入http中创建的axios实例
import store from "../vuex/store";
import md5 from "../../static/js/md5.min"; // 根据需求是否导入qs模块
let base = store.state.sendHost;
let hT = '';
let apiName = {
  // post
  register:'auth/register', // 用户注册

  // get

}
// 保证签名不一致
function  createSign(method,params) {
  hT = new Date().getTime().toString().substring(0,10)
  let sign = '';
  if(params){
    let arr = [];
    for(let key in params){
      arr.push(key)
    }
    arr = arr.sort();
    arr.forEach(ele => {
      //中文需要转码
      // sign += `${ele}=${encodeURIComponent(params[ele])}&`
      sign += `${ele}=${params[ele]}&`
    });
  }
  // console.log(method+'&'+sign+hT)
  // console.log(md5(method+'&'+sign+hT))
  return md5(method+'&'+sign+hT);
}
// 接口请求
const http = {
  post(api,params) {
    return axios.post(`${base}/${apiName[api]}`,params);
  },
  get(api,param) {
    return axios.get(`${base}/${apiName[api]}`,{params:param});
  }
}
export default http;


