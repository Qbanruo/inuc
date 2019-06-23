import axios from 'axios'

class HttpLib {
  constructor (baseUrl) {
    this.instance = axios.create()
    this.instance.defaults.baseURL = baseUrl
    this.instance.defaults.timeout = 30000
    this.instance.defaults.headers['Content-Type'] = 'application/json'

    this.instance.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      console.log('from interceptor: ' + error)
      return Promise.reject(error)
    })
  }

  async get (url, params = null) {
    try {
      let res = await this.instance.get(url, {params})

      return res.data
    } catch (error) {
      console.log(error.message)
    }
  }

  async post (url, data = {}) {
    try {
      let res = await this.instance.post(url, data)

      return res.data
    } catch (error) {
      console.log(error.message)
    }
  }

  async delete (url, data) {
    try {
      let res = await this.instance.delete(url, {data})

      return res.data
    } catch (error) {
      console.log(error.message)
    }
  }
}

export { HttpLib }
