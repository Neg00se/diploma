import { apiSlice } from "../../app/api/apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/api/Admin/getUsers",
      providesTags: ["Admin"],
    }),
  }),
});

export const { useGetUsersQuery } = adminApiSlice;
