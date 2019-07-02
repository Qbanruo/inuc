
let api = {
  getInuPrice:() => `novalid/getInuPrice`,
  getPublicNumImg: () => `novalid/getPublicNumImg`,
  getSweepCodeLogin: () => `novalid/sweepCodeLogin`,
  getInuInfoByType: () => `novalid/getInuInfoByType`,
  postSweepPayment: () => `vipuser/sweepPayment`,
  getEffectiveInsurance: () => `vipuser/getEffectiveInsurance`,
  getUnopenedInsurance: () => `vipuser/getUnopenedInsurance`,
  getPurchaseRecord: () => `vipuser/getPurchaseRecord`,
  insureQRcode: () => `vipuser/insureQRcode`,
  getbalancebyaddr: () => 'vipuser/getbalancebyaddr',
  sweepCallBack: () => 'vipuser/sweepCallBack',
  getExtensionRecord: () => 'vipuser/getExtensionRecord',
  selProfit: () => 'vipuser/selProfit'
}

let ApiRoutes = {
  api: api
}

export {ApiRoutes}
