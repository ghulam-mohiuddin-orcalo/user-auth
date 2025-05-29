import { api } from "@/redux/services/api";

import { IApiResponse, IPost, IQueryParams } from "./types";
type PostTag = { type: 'POSTS'; id: string | 'LIST' };

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], IQueryParams>({
      query: (params) => ({
        url: '/faqs',
        method: 'GET',
        params
      }),
      transformResponse: (response: IApiResponse): IPost[] => {
        // Transform the API response to return just the array of posts
        return response.data.faqs;
      },
      providesTags: (result): PostTag[] => {
        // Type the providesTags function
        if (!result) {
          return [{ type: 'POSTS', id: 'LIST' }];
        }
        return [
          ...result.map(({ _id }) => ({ type: 'POSTS', id: _id } as const)),
          { type: 'POSTS', id: 'LIST' } as const,
        ];
      },
    }),

    // getPostById: builder.query<Post, string>({
    //   query: (id) => ({
    //     url: `/posts/${id}`,
    //     method: 'GET'
    //   }),
    //   providesTags: (result, error, id) => [{ type: 'POSTS', id }],
    // }),

    // createPost: builder.mutation<Post, Partial<Post>>({
    //   query: (newPost) => ({
    //     url: '/posts',
    //     method: 'POST',
    //     body: newPost,
    //   }),
    //   invalidatesTags: [{ type: 'POSTS', id: 'LIST' }],
    // }),

    // updatePost: builder.mutation<Post, Partial<Post> & { id: string }>({
    //   query: ({ id, ...patch }) => ({
    //     url: `/posts/${id}`,
    //     method: 'PUT',
    //     body: patch,
    //   }),
    //   invalidatesTags: (result, error, { id }) => [{ type: 'POSTS', id }],
    // }),

    // deletePost: builder.mutation<{ id: string }, string>({
    //   query: (id) => ({
    //     url: `/posts/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: (result, error, id) => [{ type: 'POSTS', id }],
    // }),

  }),
});

export const {
  useGetPostsQuery,
  // useGetPostByIdQuery,
  // useCreatePostMutation,
} = postsApi;