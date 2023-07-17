
import { apiSlice } from "../apiSlice";

import * as ENDPOINT from "../constants";
import { LoginInput, RequestOtp, SetupSchoolCustomInput, SetupSchoolInput, SetupSchoolResult, StudentLoginResult, TeacherSignup, VerifyOtp } from "../../utils/dataTypes/auth";
import { BaseResult, ErrorResult } from "../../utils/dataTypes";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.query<StudentLoginResult | ErrorResult, LoginInput>({
      query: (login) => ({
        url: `${ENDPOINT.USER_LOGIN}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: login,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    registerSchool: builder.query<BaseResult | ErrorResult, TeacherSignup>({
      query: (payload) => ({
        url: `${ENDPOINT.SCHOOL_REGISTER}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    sendOtp: builder.query<BaseResult | ErrorResult, RequestOtp>({
      query: (payload) => ({
        url: `${ENDPOINT.REQUEST_NEW_OTP}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    verifyOtp: builder.query<BaseResult | ErrorResult, VerifyOtp>({
      query: (payload) => ({
        url: `${ENDPOINT.VERIFY_NEW_OTP}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    setupSchool: builder.query<SetupSchoolResult | SetupSchoolCustomInput | ErrorResult, SetupSchoolInput>({
      query: (payload) => ({
        url: `${ENDPOINT.SCHOOL_SETUP}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),
  }),
  overrideExisting: true,
});

export const {
  useLazyLoginQuery,
  useLazyRegisterSchoolQuery,
  useSendOtpQuery,
  useLazySendOtpQuery,
  useLazyVerifyOtpQuery,
  useLazySetupSchoolQuery
} = authApiSlice;