
let api = {
  getInuPrice:() => `novalid/getInuPrice`,
  getPublicNumImg: () => `novalid/getPublicNumImg`,
  getSweepCodeLogin: () => `novalid/sweepCodeLogin`,
  getInuInfoByType: () => `novalid/getInuInfoByType`,
  postSweepPayment: () => `vipuser/sweepPayment`,
  getEffectiveInsurance: () => `vipuser/getEffectiveInsurance`,
  getUnopenedInsurance: () => `vipuser/getUnopenedInsurance`
}

let ApiRoutes = {
  api: api
}

export {ApiRoutes}
