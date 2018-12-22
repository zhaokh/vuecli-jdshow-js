//新建一个JS命名为api
import axios from 'axios' 
//在api中导入axios
let base = 'http://localhost:8081/api'

//把整个项目的网络请求都写在这个文件中用export导出

export const getCount = param => {return axios.get(`${base}/${param}/listCount`) }