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

  export const BASE_URL = import.meta.env.VITE_BASE_URL;

  // auth

export const USER_LOGIN = 'account/signin'
export const SCHOOL_REGISTER = 'account/signup'
export const PARENT_REGISTER = 'student/parent/signup_first'
export const PARENT_REGISTER_SECOND = 'student/parent/signup_second'
export const REQUEST_NEW_OTP = 'account/verify/resend'
export const REQUEST_OTP = 'account/send_otp'
export const VERIFY_NEW_OTP = 'account/verify'
export const VERIFY_OTP = 'account/send_otp'
export const FORGET_PASSWORD = 'account/resetpassword'
export const CHANGE_PASSWORD = 'account/change_password'
export const RESET_PASSWORD = '/account/verify_reset_password'

// Setup school
export const SCHOOL_SETUP = 'school/setup'

// routine
export const GET_INVITED_STUDENT = 'student/invited'
export const GET_INVITED_STUDENT_INFO = 'invites/student/info'
export const ACCEPT_STUDENT_MAGIC = 'invites/student/accept'
export const ACCEPT_STUDENT_INVITE = 'student/invite/accept'
export const ACCEPT_TEACHER_INVITE = 'teacher/invite/accept'
export const ACCEPT_TEACHER_MAGIC = 'invites/teacher/accept'
export const GET_INVITED_TEACHER = 'teacher/invited'
export const GET_INVITED_TEACHER_INFO = 'invites/info'
export const GET_TIO_CLASSES = 'tio/classes'
