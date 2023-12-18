import { axiosBaseQuery } from '@/api/interceptor/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export const medleyApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: `https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test`,
  }),
  endpoints: () => ({}),
  reducerPath: 'medleyApi',
  tagTypes: [],
});
