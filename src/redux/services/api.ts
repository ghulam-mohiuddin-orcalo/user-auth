import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { providesTags } from './providesTags'
import { API_BASE_URL, MANUAL_TOKEN } from '@/constants/config'

// Define a base API service
export const api = createApi({
  // Unique key for the reducer
  reducerPath: 'api',

  // Base URL for all endpoints
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    // Global headers (e.g., auth token)
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token') || MANUAL_TOKEN;
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),


  endpoints: () => ({}),
  tagTypes: providesTags,
});

// Export hooks for usage in components
export const {
  // Hooks will be injected here when you add endpoints
} = api;