/**
 * Created by Administrator on 2017/9/11.
 */
var root = '/p/api'
import axios from 'axios'
import { Message } from 'element-ui'
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// 参数过滤函数
function filterNull (o) {
  for (let key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

/*
  接口处理函数
  这个函数每个项目都是不一样的，我现在调整的是适用于
  https://cnodejs.org/api/v1 的接口，如果是其他接口
  需要根据接口的参数进行调整。参考说明文档地址：
  https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
  主要是，不同的接口的成功标识和失败提示是不一致的。
  另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/

function apiAxios (method, url, params, success, handle) {
  if (params) {
    params = filterNull(params)
  }
  let _before = ''
  let _finally = ''
  let _error = ''
  let _beforeSuccess = ''
  if (handle && handle !== null) {
    if (handle._before && handle._before !== null) {
      _before = handle._before
    }
    if (handle._finally && handle._finally !== null) {
      _finally = handle._finally
    }
    if (handle._beforeSuccess && handle._beforeSuccess !== null) {
      _beforeSuccess = handle._beforeSuccess
    }
    if (handle._error && handle._error !== null) {
      _error = handle._error
    }
  }
  if (typeof _before === 'function') {
    _before()
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false
  }).then(function (res) {
    if (res.data.meta.success === true) {
      if (typeof _beforeSuccess === 'function') {
        _beforeSuccess(res.data.data)
      }
      if (success) {
        success(res.data.data)
      }
    } else {
      if (res.data.meta.message) {
        let messageString = ''
        messageString = res.data.meta.message
        Message.error({
          message: messageString
        })
      }

      if (_error) {
        _error(res.data)
      } else {
        console.log(res)
        // window.alert('error: ' + JSON.stringify(res.data))
      }
    }
    if (typeof _finally === 'function') {
      _finally()
    }
  }).catch(function (err) {
    console.log(err)
    let res = err.response
    if (err) {
      console.log(res)
      // window.alert('api error, HTTP CODE: ' + res.status)
      return
    }
  })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
