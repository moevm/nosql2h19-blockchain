import axios from 'axios'

import { API_URL, METHOD } from 'constants/api'

interface FetchOptions {
  headers?: any
  otherUrl?: string
  version?: string
  endpoint?: string
  path?: string
  token?: string
  method?: METHOD
  body?: any
}

function fetchAPI<T extends {}>({
  headers,
  otherUrl = '',
  version = 'v0',
  endpoint = '',
  path = '',
  token = '',
  method = METHOD.GET,
  body
}: FetchOptions) {
  const url = otherUrl ? otherUrl : `${API_URL}/${version}${endpoint}${path ? `/${path}` : '/'}`

  if (process.env.NODE_ENV === 'development') {
    console.log('API CALL', method.toUpperCase(), url, body)
  }

  const reqHeaders = token ? { authorization: `Bearer ${token}`, ...headers } : { ...headers }

  return axios.request<T>({
    url,
    headers: reqHeaders,
    method,
    data: body
  })
}

export default fetchAPI
