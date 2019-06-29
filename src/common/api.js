import {HttpLib} from './http_lib'
import {ApiRoutes} from './api_routes'

export default {
  async getInuPrice(){
    let data = await HttpLib.get(ApiRoutes.price.getInuPrice())
    return data
  }
}
