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
  },
  async getPurchaseRecord (params){
    let data = await HttpLib.post(ApiRoutes.api.getPurchaseRecord(), params)
    return data
  },
  async insureQRcode (params){
    let data = await HttpLib.post(ApiRoutes.api.insureQRcode(), params)
    return data
  },
  async getbalancebyaddr (params){
    let data = await HttpLib.post(ApiRoutes.api.getbalancebyaddr(), params)
    return data
  },
  async sweepCallBack (params){
    let data = await HttpLib.post(ApiRoutes.api.sweepCallBack(), params)
    return data
  },
  async getExtensionRecord (params){
    let data = await HttpLib.post(ApiRoutes.api.getExtensionRecord(), params)
    return data
  },
  async selProfit (params){
    let data = await HttpLib.post(ApiRoutes.api.selProfit(), params)
    return data
  }
}
