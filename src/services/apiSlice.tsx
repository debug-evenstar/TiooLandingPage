import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, CACHE_LIFETIME } from "./constants";


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ 
    baseUrl: BASE_URL ,
    prepareHeaders: (headers, _) => {
      const profile = localStorage.getItem('profile');
      if(profile){
        const data = JSON.parse(profile);
        headers.set('Authorization', `Bearer ${data.token}`);
      }
      return headers;
    }

  }),
  keepUnusedDataFor: CACHE_LIFETIME.TINY,
  tagTypes: [],
  endpoints: (_: any) => ({}),
});