import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { providesTags } from './providesTags'
// Define a base API service
export const api = createApi({
  // Unique key for the reducer
  reducerPath: 'api',

  // Base URL for all endpoints
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
    // Global headers (e.g., auth token)
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),

  // Auto-refetching behavior (optional)
  // refetchOnFocus: true, // Refetch when window regains focus
  // refetchOnReconnect: true, // Refetch after reconnecting to the internet

  // Define endpoints (you'll add these later)
  endpoints: (builder) => ({
    getExample: builder.query<string, void>({
      query: () => 'example-endpoint',
    }),
  }),
  tagTypes: providesTags,
});

// Export hooks for usage in components
export const {
  // Hooks will be injected here when you add endpoints
} = api;