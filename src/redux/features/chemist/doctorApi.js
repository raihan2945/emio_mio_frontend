import apiSlice from "../api";
import { store } from "../../store";

const token = store.getState()?.auth?.accessToken;

const chemistApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChemists: builder.query({
      query: (id) => ({
        url: `/api/v1/chemists/by_mio/${id}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Chemist"],
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

export const { useGetChemistsQuery } = chemistApi;
export default chemistApi;
