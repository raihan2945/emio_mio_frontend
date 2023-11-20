import apiSlice from "../api";
import { store } from "../../store";

const token = store.getState()?.auth?.accessToken;

const chamberApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChambers: builder.query({
      query: (id) => ({
        url: `/api/v1/chambers/doctor/${id}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Chamber"],
    }),

    createChamber: builder.mutation({
      query: (data) => ({
        url: `/api/v1/chambers`,
        method: "POST",
        body: data,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Chamber"],
    }),
    updateChamber: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/chambers/4{id}`,
        method: "PATCH",
        body: data,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Chamber"],
    }),
    deleteChamber: builder.mutation({
      query: ({ data }) => ({
        url: `/api/v1/doctors`,
        method: "DELETE",
        body: data,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Chamber"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetChambersQuery,
  useCreateChamberMutation,
  useUpdateChamberMutation,
  useDeleteChamberMutation
} = chamberApi;
export default chamberApi;
