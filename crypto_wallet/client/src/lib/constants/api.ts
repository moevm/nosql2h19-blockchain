const DEV_DOMAIN = 'http://localhost:3000'
const PROD_DOMAIN = 'http://localhost:8000'

export const MAIN_URL = `${process.env.NODE_ENV === 'development' ? DEV_DOMAIN : PROD_DOMAIN}`
export const API_URL = `${process.env.NODE_ENV === 'development' ? DEV_DOMAIN : PROD_DOMAIN}/api`

export enum METHOD {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete'
}

export const ENDPOINT = {
  AUTH: '/jwt_auth/authenticate',
  REG: '/users/register',
  INFO: '/users/current',
  WALLET: '/bank_accounts/current',
  SEND: '/bank_accounts/send',
  POPUP: '/bank_accounts/topup'
}
