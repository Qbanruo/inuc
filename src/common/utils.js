
export function extractQueryParams (url) {
  let queryParams = {}
  if (url.includes('?')) {
    let queryString = url.substr(url.indexOf('?') + 1)
    let pairs = queryString.split('&')
    for(let pair of pairs) {
      let splitArray = pair.split('=')
      let key = splitArray[0]
      let value = splitArray[1]
      if (value.indexOf('#') > -1) {
        value = value.substring(0, value.indexOf('#'))
      }

      queryParams[key] = value
    }
  }

  return queryParams
}
