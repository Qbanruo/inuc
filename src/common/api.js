import {HttpLib} from './http_lib'
import {ApiRoutes} from './api_routes'

export default {
  async getInuPrice (){
    let data = await HttpLib.get(ApiRoutes.api.getInuPrice())
    return data
  },
  async getPublicNumImg(){
    let data = await HttpLib.get(ApiRoutes.api.getPublicNumImg())
    return data
  },
  async getSweepCodeLogin(params){
    let data = await HttpLib.get(ApiRoutes.api.getSweepCodeLogin(), params)
    return data
  },
  async getInuInfoByType(params){
    let data = await HttpLib.get(ApiRoutes.api.getInuInfoByType(), params)
    return data
  },
  async postSweepPayment(params){
    let data = await HttpLib.post(ApiRoutes.api.postSweepPayment(), params)
    return data
  },
  async getEffectiveInsurance (params){
    let data = await HttpLib.post(ApiRoutes.api.getEffectiveInsurance(), params)
    return data
  },
  async getUnopenedInsurance (params){
    let data = await HttpLib.post(ApiRoutes.api.getUnopenedInsurance(), params)
    return data
  }
}
