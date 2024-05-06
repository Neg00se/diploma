import { apiSlice } from "../../app/api/apiSlice";

export const userProfileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "/api/User/profile",
      providesTags: ["Profile"],
    }),
    toPay: builder.query({
      query: () => "/api/Communal/toPay",
      providesTags: ["Pay"],
    }),
    userPlan: builder.query({
      query: () => "/api/User/userRate",
      providesTags: ["Tariff"],
    }),
    payMoney: builder.mutation({
      query: ({ money }) => ({
        url: `api/Communal/pay?amount=${money}`,
        method: "POST",
      }),
      invalidatesTags: ["Pay", "Communals"],
    }),
    changeCreds: builder.mutation({
      query: (creds) => ({
        url: "/api/User/changeCreds",
        method: "POST",
        body: { ...creds },
      }),
      invalidatesTags: ["Profile"],
    }),
    changePhone: builder.mutation({
      query: (phone) => ({
        url: `api/User/changePhone?phone=${phone}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useToPayQuery,
  useUserPlanQuery,
  usePayMoneyMutation,
  useChangeCredsMutation,
  useChangePhoneMutation,
} = userProfileApiSlice;
