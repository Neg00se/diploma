import { apiSlice } from "../../app/api/apiSlice";

export const communalsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCommunals: builder.query({
      query: () => "api/Communal/get",
      providesTags: ["Communals"],
    }),
    addCommunal: builder.mutation({
      query: (indicators) => ({
        url: "api/Communal/addCommunal",
        method: "POST",
        body: { ...indicators },
        headers: {
          "Content-type": "application/json",
        },
      }),
      invalidatesTags: ["Communals"],
    }),
  }),
});

export const { useGetCommunalsQuery, useAddCommunalMutation } =
  communalsApiSlice;
