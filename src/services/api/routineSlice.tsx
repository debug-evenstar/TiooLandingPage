import { apiSlice } from "../apiSlice";

import * as ENDPOINT from "../constants";
import { BaseResult, ErrorResult, IpResults } from "../../utils/dataTypes";
import {
  StudentSignupInput,
  TeacherSignup,
} from "../../utils/dataTypes/auth";

export const routineApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudentInvite: builder.query<any | ErrorResult, void>({
      query: (param) => ({
        url: `${ENDPOINT.GET_INVITED_STUDENT}/${param}`,
        method: ENDPOINT.HTTP_METHODS.GET,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getStudentInviteInfo: builder.query<any | ErrorResult, void>({
      query: (param) => ({
        url: `${ENDPOINT.GET_INVITED_STUDENT_INFO}/${param}`,
        method: ENDPOINT.HTTP_METHODS.GET,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    acceptStudMagic: builder.query<
      BaseResult | ErrorResult,
      StudentSignupInput
    >({
      query: (payload) => ({
        url: `${ENDPOINT.ACCEPT_STUDENT_MAGIC}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    acceptStudInvite: builder.query<
      BaseResult | ErrorResult,
      StudentSignupInput
    >({
      query: (payload) => ({
        url: `${ENDPOINT.ACCEPT_STUDENT_INVITE}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    // teachers
    getTeacherInvite: builder.query<any | ErrorResult, void>({
      query: (param) => ({
        url: `${ENDPOINT.GET_INVITED_TEACHER}/${param}`,
        method: ENDPOINT.HTTP_METHODS.GET,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getTeacherInviteInfo: builder.query<any | ErrorResult, void>({
      query: (param) => ({
        url: `${ENDPOINT.GET_INVITED_TEACHER_INFO}/${param}`,
        method: ENDPOINT.HTTP_METHODS.GET,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getTioClasses: builder.query<any | ErrorResult, void>({
      query: (param) => ({
        url: `${ENDPOINT.GET_TIO_CLASSES}`,
        method: ENDPOINT.HTTP_METHODS.GET,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    acceptTeachMagic: builder.query<BaseResult | ErrorResult, TeacherSignup>({
      query: (payload) => ({
        url: `${ENDPOINT.ACCEPT_TEACHER_MAGIC}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    acceptTeachInvite: builder.query<BaseResult | ErrorResult, TeacherSignup>({
      query: (payload) => ({
        url: `${ENDPOINT.ACCEPT_TEACHER_INVITE}`,
        method: ENDPOINT.HTTP_METHODS.POST,
        body: payload,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getIp: builder.query<IpResults | ErrorResult, void>({
      query: () => ({
        url: `https://api.ipify.org?format=json`,
        method: ENDPOINT.HTTP_METHODS.GET,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),

    getContinent: builder.query<BaseResult | ErrorResult, string>({
      query: (param) => ({
        url: `http://ipwho.is/${param}`,
        method: ENDPOINT.HTTP_METHODS.GET,
      }),
      keepUnusedDataFor: ENDPOINT.CACHE_LIFETIME.DEFAULT,
    }),
  }),
  overrideExisting: true,
});

export const {
  useLazyGetStudentInviteQuery,
  useLazyGetStudentInviteInfoQuery,
  useLazyAcceptStudInviteQuery,
  useLazyAcceptStudMagicQuery,
  useLazyGetTeacherInviteInfoQuery,
  useLazyGetTeacherInviteQuery,
  useLazyAcceptTeachInviteQuery,
  useLazyAcceptTeachMagicQuery,
  useGetTioClassesQuery,
  useGetIpQuery,
  useLazyGetContinentQuery
} = routineApiSlice;
