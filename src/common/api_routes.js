
let api = {
  getInuPrice:() => `openapi/novalid/getInuPrice`,
  getPublicNumImg: () => `openapi/novalid/getPublicNumImg`,
  getSweepCodeLogin: () => `openapi/novalid/sweepCodeLogin`,
  getInuInfoByType: () => `openapi/novalid/getInuInfoByType`,
  postSweepPayment: () => `openapi/vipuser/sweepPayment`,
  getAddress: () => 'api/openApiTest'
}

let ApiRoutes = {
  api: api
}

export {ApiRoutes}
