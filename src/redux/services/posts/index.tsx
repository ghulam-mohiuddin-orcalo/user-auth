import { api } from "@/redux/services/api";

interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
  // ... other fields
}

interface QueryParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: 'asc' | 'desc';
  [key: string]: any;  // Allow additional query params
}

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], QueryParams>({
      query: (params) => ({
        url: '/posts',
        method: 'GET',
        params
      }),
      providesTags: (result, error, arg) => {
        return result
          ? [...result.map(({ id }) => ({ type: 'POSTS', id })), { type: 'POSTS', id: 'LIST' }]
          : [{ type: 'POSTS', id: 'LIST' }];
      },
    }),

    getPostById: builder.query<Post, string>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'GET'
      }),
      providesTags: (result, error, id) => [{ type: 'POSTS', id }],
    }),

    createPost: builder.mutation<Post, Partial<Post>>({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: [{ type: 'POSTS', id: 'LIST' }],
    }),

    updatePost: builder.mutation<Post, Partial<Post> & { id: string }>({
      query: ({ id, ...patch }) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'POSTS', id }],
    }),

    deletePost: builder.mutation<{ id: string }, string>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'POSTS', id }],
    }),

  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
} = postsApi;