// NB: Lifetime is in seconds
export enum CACHE_LIFETIME {
    DEFAULT = 0,
    TINY = 20,
    MEDIUM = 180,
    EXTENDED = 3600,
  }
  
  export enum HTTP_METHODS {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
  }

  export const BASE_URL = process.env.REACT_APP_BASE_URL;

  // auth

export const USER_LOGIN = 'account/signin'
export const SCHOOL_REGISTER = 'account/signup'
export const REQUEST_NEW_OTP = 'new/account/send_otp'
export const REQUEST_OTP = 'account/send_otp'
export const VERIFY_NEW_OTP = 'new/account/verify'
export const VERIFY_OTP = 'account/send_otp'
export const FORGET_PASSWORD = 'account/resetpassword'
export const RESET_PASSWORD = 'account/change_password'

// Setup school
export const SCHOOL_SETUP = 'school/setup'
