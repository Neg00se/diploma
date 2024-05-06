import { apiSlice } from "../../app/api/apiSlice";

export const registerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "api/User/register",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["Admin"],
    }),
  }),
});

export const { useRegisterMutation } = registerApiSlice;
