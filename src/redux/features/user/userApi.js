import apiSlice from "../api";
import { setUser } from "./userSlice";
import { store } from "../../store";

const token = store.getState()?.auth?.accessToken;

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (data) => ({
        url: "/api/v1/mio/profile",
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(setUser({ user: result.data.data }));
        } catch (err) {
          // do nothing
        }
      },
      invalidatesTags: ["User"],
    }),
    // userRegister: builder.mutation({
    //   query: (data) => ({
    //     url: '/api/v1/mio/sign-in',
    //     method: 'POST',
    //     body: data,
    //   }),
    //   async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    //     try {
    //       const result = await queryFulfilled;

    //       dispatch(
    //         userLoggedIn({
    //           accessToken: result.data.jwt,
    //           user: result.data.user,
    //         })
    //       );
    //     } catch (err) {
    //       // do nothing
    //     }
    //   },
    //   invalidatesTags: ['User'],
    // }),
    // userLogin: builder.mutation({
    //   query: (data) => ({
    //     url: '/api/v1/mio/sign-in',
    //     method: 'POST',
    //     body: data,
    //   }),
    //   async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    //     try {
    //       const result = await queryFulfilled;

    //       dispatch(
    //         userLoggedIn({
    //           accessToken: result.data.data.access_token,
    //           user: result.data.user,
    //         })
    //       );
    //     } catch (err) {
    //       // do nothing
    //     }
    //   },
    //   invalidatesTags: ['User'],
    // }),
  }),
  overrideExisting: true,
});

export const { useGetUserQuery } = userApi;
export default userApi;
