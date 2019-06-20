let config = {
  apiSite: 'ace.she.dev2.zanservice.com/api'
}
// const http = 'http'/ 'https' 确定是http 或者 https
const http = process.env.NODE_ENV === 'development' ? 'http' : 'https'

export const apiRoot = `${http}://${config.apiSite}`
export const headerName = 'X-Ca-ZanToken'
