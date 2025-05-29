import { api } from "@/redux/services/api";
import { LoginResponse, LoginRequest } from "./types";


export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({

    signin: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/signin',
        method: 'POST',
        body: credentials,
      }),
    }),

  }),
});

export const {
  useSigninMutation,
} = authApi;