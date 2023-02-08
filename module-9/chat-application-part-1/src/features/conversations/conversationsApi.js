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
      query: (currentUserEmail, partnerEmail) =>
        `/conversations?participants_like=${currentUserEmail}-${partnerEmail}&participants_like=${partnerEmail}-${currentUserEmail}&`,
    }),
  }),
});

export const { useGetConversationsQuery } = conversationsApi;
