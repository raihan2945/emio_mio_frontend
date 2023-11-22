import apiSlice from "../api";
import { store } from "../../store";

const token = store.getState()?.auth?.accessToken;

const chamberApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
   
    getDoctorExperiences: builder.query({
      query: (id) => {
        const url = `api/v1/experience/doctor/${id}`;
        return (
          id && {
            url: url,
            method: "GET",
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
      },
      invalidatesTags: ["Experience"],
    }),

    createDoctorExperience: builder.mutation({
      query: (data) => ({
        url: `/api/v1/experience/doctor`,
        method: "POST",
        body: data,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Experience"],
      providesTags : ["Experience"]
    }),
    updateDoctorExperience: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/experience/doctor/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Experience"],
      providesTags : ["Experience"]
    }),
    deleteDoctorExperience: builder.mutation({
      query: (id) => ({
        url: `/api/v1/experience/doctor/${id}`,
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Experience"],
      providesTags : ["Experience"]
    }),
  }),
  overrideExisting: true,
});

export const {
 useGetDoctorExperiencesQuery,
 useUpdateDoctorExperienceMutation,
 useCreateDoctorExperienceMutation,
 useDeleteDoctorExperienceMutation
} = chamberApi;
export default chamberApi;
