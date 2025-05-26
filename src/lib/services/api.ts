import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a base API service
export const api = createApi({
  // Unique key for the reducer
  reducerPath: 'api',

  // Base URL for all endpoints
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://your-api.com/',
    // Global headers (e.g., auth token)
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),

  // Auto-refetching behavior (optional)
  refetchOnFocus: true, // Refetch when window regains focus
  refetchOnReconnect: true, // Refetch after reconnecting to the internet

  // Define endpoints (you'll add these later)
  endpoints: () => ({}),
});

// Export hooks for usage in components
export const {
  // Hooks will be injected here when you add endpoints
} = api;