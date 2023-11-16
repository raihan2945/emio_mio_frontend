import apiSlice from "../api";
import { store } from "../../store";

const token = store.getState()?.auth?.accessToken;

const doctorApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: (id) => ({
        url: `/api/v1/doctors/get_by_mio/${id}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Doctor"],
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

export const { useGetDoctorsQuery } = doctorApi;
export default doctorApi;
