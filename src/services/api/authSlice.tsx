
import { apiSlice } from "../apiSlice";

import * as ENDPOINT from "../constants";
import { ForgetPasswordInput, LoginInput, RequestOtp, ResetPasswordInput, SetupSchoolCustomInput, SetupSchoolInput, SetupSchoolResult, StudentLoginResult, UserSignup, TeacherSignup, VerifyOtp } from "../../utils/dataTypes/auth";
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

    // registerSchool: builder.query<BaseResult | ErrorResult, TeacherSignup>({
    //   query: (payload) => ({
    //     url: `${ENDPOINT.SCHOOL_REGISTER}`,
    //     method: ENDPOINT.HTTP_METHODS.POST,
    //     body: payload,
    //   }),
    //   keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    // }),

    registerUser: builder.query<BaseResult | ErrorResult, UserSignup>({
      query: (payload) => ({
        url: `${ENDPOINT.USER_REGISTER}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),



    registerParent: builder.query<BaseResult | ErrorResult, TeacherSignup>({
      query: (payload) => ({
        url: `${ENDPOINT.PARENT_REGISTER}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    completeRegisterParent: builder.query<BaseResult | ErrorResult, TeacherSignup>({
      query: (payload) => ({
        url: `${ENDPOINT.PARENT_REGISTER_SECOND}`,
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

    setupSchool: builder.query<SetupSchoolResult | ErrorResult, SetupSchoolInput | SetupSchoolCustomInput>({
      query: (payload) => ({
        url: `${ENDPOINT.SCHOOL_SETUP}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getAccountTypes: builder.query<any, any>({
      query: () => ({
        url: `${ENDPOINT.ACCOUNT_TYPES}`,
        method: ENDPOINT.HTTP_METHODS.GET,
      })
    }),

    getOnboardingQuestions: builder.query<any, any>({
      query: (id) => ({
        url: `/onboarding/questions`,
        method: ENDPOINT.HTTP_METHODS.GET,
      })
    }),

    forgetPassword: builder.mutation<BaseResult | ErrorResult, ForgetPasswordInput>({
      query: (payload) => ({
        url: `${ENDPOINT.FORGET_PASSWORD}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: payload,
      }),
    }),

    resetPassword: builder.mutation<BaseResult | ErrorResult, ResetPasswordInput>({
      query: (payload) => ({
        url: `${ENDPOINT.RESET_PASSWORD}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: payload,
      }),
    }),



    // Onboarding queries

  }),
  overrideExisting: true,
});

export const {
  useLazyLoginQuery,
  // useLazyRegisterSchoolQuery,
  useLazyRegisterUserQuery,
  useLazyRegisterParentQuery,
  useLazyCompleteRegisterParentQuery,
  useSendOtpQuery,
  useLazySendOtpQuery,
  useLazyVerifyOtpQuery,
  useLazySetupSchoolQuery,
  useLazyGetAccountTypesQuery,
  useLazyGetOnboardingQuestionsQuery,
  useForgetPasswordMutation,
  useResetPasswordMutation
} = authApiSlice;