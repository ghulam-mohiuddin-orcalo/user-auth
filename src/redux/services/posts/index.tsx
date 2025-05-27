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
      providesTags: ['POSTS'],
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
      invalidatesTags: ['POSTS'],
    }),

  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
} = postsApi;