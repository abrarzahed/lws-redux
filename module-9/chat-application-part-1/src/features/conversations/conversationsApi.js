import { apiSlice } from "../api/apiSlice";

export const conversationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    /* 
        COMMENT: endpoints goes here
    */
    getConversations: builder.query({
      query: (currentUserEmail) =>
        `/conversations?participants_like=${currentUserEmail}&_sort=timestamp&_order=desc&_page=1&_limit=5`,
    }),
    getConversation: builder.query({
      query: ({ currentUserEmail, partnerEmail }) =>
        `/conversations?participants_like=${currentUserEmail}-${partnerEmail}&participants_like=${partnerEmail}-${currentUserEmail}`,
    }),
    addConversation: builder.mutation({
      query: (data) => ({
        url: "/conversations",
        method: "POST",
        body: data,
      }),
    }),
    editConversation: builder.mutation({
      query: ({ id, data }) => ({
        url: `/conversations/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetConversationsQuery,
  useGetConversationQuery,
  useAddConversationMutation,
  useEditConversationMutation,
} = conversationsApi;
