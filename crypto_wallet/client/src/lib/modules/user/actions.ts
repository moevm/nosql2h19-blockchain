import { Action, ActionCreator } from 'redux'
import TYPES from './types'

export interface RegistrationRequestAction extends Action<TYPES.REG_REQUEST> {
  payload: Data.Registration
}

export interface RegistrationSuccessAction extends Action<TYPES.REG_SUCCESS> {
  payload: Data.User
}

export interface RegistrationFailureAction extends Action<TYPES.REG_FAILURE> {
  error: string
}

export interface AuthorizationRequestAction extends Action<TYPES.AUTH_REQUEST> {
  payload: Data.Authorization
}

export interface AuthorizationSuccessAction extends Action<TYPES.AUTH_SUCCESS> {
  payload: {
    token: string
  }
}

export interface AuthorizationFailureAction extends Action<TYPES.AUTH_FAILURE> {
  error: string
}

export interface UserInfoRequestAction extends Action<TYPES.USER_INFO_REQUEST> {
  payload: {
    token: string
  }
}

export interface UserInfoSuccessAction extends Action<TYPES.USER_INFO_SUCCESS> {
  payload: Data.User
}

export interface UserInfoFailureAction extends Action<TYPES.USER_INFO_FAILURE> {}

export type ActionTypes =
  | RegistrationRequestAction
  | RegistrationSuccessAction
  | RegistrationFailureAction
  | AuthorizationRequestAction
  | AuthorizationSuccessAction
  | AuthorizationFailureAction
  | UserInfoRequestAction
  | UserInfoSuccessAction
  | UserInfoFailureAction

// Registration
export const registrationRequest: ActionCreator<RegistrationRequestAction> = (
  payload: Data.Registration
) => ({
  type: TYPES.REG_REQUEST,
  payload
})

export const registrationSuccess: ActionCreator<RegistrationSuccessAction> = (
  payload: Data.User
) => ({
  type: TYPES.REG_SUCCESS,
  payload
})

export const registrationFailure: ActionCreator<RegistrationFailureAction> = (error: string) => ({
  type: TYPES.REG_FAILURE,
  error
})

// Authorization
export const authorizationRequest: ActionCreator<AuthorizationRequestAction> = (
  payload: Data.Authorization
) => ({
  type: TYPES.AUTH_REQUEST,
  payload
})

export const authorizationSuccess: ActionCreator<AuthorizationSuccessAction> = (token: string) => ({
  type: TYPES.AUTH_SUCCESS,
  payload: {
    token
  }
})

export const authorizationFailure: ActionCreator<AuthorizationFailureAction> = (error: string) => ({
  type: TYPES.AUTH_FAILURE,
  error
})

// user info
export const UserInfoRequest: ActionCreator<UserInfoRequestAction> = token => ({
  type: TYPES.USER_INFO_REQUEST,
  payload: {
    token
  }
})

export const UserInfoSuccess: ActionCreator<UserInfoSuccessAction> = (payload: Data.User) => ({
  type: TYPES.USER_INFO_SUCCESS,
  payload
})
