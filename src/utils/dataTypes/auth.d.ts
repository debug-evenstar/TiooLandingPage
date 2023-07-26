import { BaseResult } from ".";

export interface LoginInput {
    email: string;
    password: string;
  }
export interface StudentLoginResult extends BaseResult{
    profile: StudentProfile
    token: string
}
export interface UserProfile {
    name: string
    email: string
    phone: string
    account_type: string
    password?: string
}

export interface StudentSignupInput {
    name: string
    email: string
    phone: string
    account_type: string
    password: string
}

export interface TeacherSignup {
    name: string
    email: string
    phone: string
    account_type: string
    password: string
}

export interface ParentSignup {
    name: string
    email: string
    phone: string
    password:string
    account_type: string
    parent: string
    class: string
    school: string
    age: string
}

export interface RequestOtp {
    email: string
}

export interface VerifyOtp {
    token: string
}

export interface SetupSchoolInput {
    email: string
    school_types?: string[]
    naming_types: string
}

export interface SetupSchoolResult extends BaseResult{
    data: {
        school_types?: string[]
        pepStatus: boolean
        id: number
        naming_types: string
        AccountId: number
    }
}

export interface SetupSchoolCustomInput {
    email: string
    school_types: string[]
    naming_types: string
    class_namings: CustomInput[]
}

export interface CustomInput {
    type: string,
    naming: string,
}

export interface SetupSlicePayload {
    naming: CustomInput[],
  types: string[]
}

export interface ForgetPasswordInput {
    email: string
}

export interface ResetPasswordInput {
    email: string | undefined
    password: string
    token: string | undefined
}

export interface UserOtp {
        email:string
        token?: string | undefined
}
export interface UserMain {
    user: UserProfile
    otp: UserOtp
    parent: any
}