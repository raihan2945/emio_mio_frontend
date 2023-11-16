import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLoggedOut } from '../auth/authSlice';

const bUrl = "http://localhost:6070"

const baseQuery = fetchBaseQuery({
  baseUrl:bUrl,
  prepareHeaders: async (headers, { getState }) => {
    const token = getState()?.auth?.accessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
      api.dispatch(userLoggedOut());
    }
    return result;
  },
  tagTypes: ['User','Chemist', 'Doctor'],
  endpoints: (builder) => ({}),
});

export default apiSlice;