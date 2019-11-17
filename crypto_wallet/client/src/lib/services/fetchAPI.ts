import axios from 'axios'

import { API_URL, METHOD } from 'constants/api'

interface FetchOptions {
  otherUrl?: string
  version?: string
  path?: string
  method?: METHOD
  body?: any
}

function fetchAPI<T extends {}>({
  otherUrl = '',
  version = 'v0',
  method = METHOD.GET,
  path = '',
  body
}: FetchOptions) {
  const url = otherUrl ? otherUrl : `${API_URL}/${version}${path ? `/${path}` : ''}`

  if (process.env.NODE_ENV === 'development') {
    console.log('API CALL', method.toUpperCase(), url, body)
  }

  return axios.request<T>({
    url,
    method,
    data: body
  })
}

export default fetchAPI
