import axios from 'axios/index'
import {apiRoot} from "./config";
var qs = require('qs')

axios.defaults.baseURL = apiRoot
axios.defaults.timeout = 30000
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  console.log('from interceptor: ' + error)
  return Promise.reject(error)
})

const HttpLib = {
  get: async function (url, params = null) {
    try {
      let res = await axios.get(url, {
        params,
      })
      return res.data
    } catch (error) {
      console.log(error.message)
    }
  },
  post: async function (url, data = {}) {
    try {
      let res = await axios.post(url, qs.stringify(data))
      return res.data
    } catch (error) {
      console.log(error.message)
    }
  },
  delete: async function (url, params) {
    try {
      let res = await axios.delete(url, {params})

      return res.data
    } catch (error) {
      console.log(error.message)
    }
  }
}

export { HttpLib }
