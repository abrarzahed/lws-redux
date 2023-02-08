import { apiSlice } from "../api/apiSlice";

export const messagesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    /* 
      COMMENT: endpoints goes here
    */
    getMessages: builder.query({
      query: (id) =>
        `/messages?conversationId=${id}&_sort=timestamp&_order=desc&_page=1&_limit==6`,
    }),
    addMessage: builder.mutation({
      query: (data) => ({
        url: "/messages",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetMessagesQuery, useAddMessageMutation } = messagesApi;
