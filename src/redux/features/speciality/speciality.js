import apiSlice from "../api";
import { store } from "../../store";

const token = store.getState()?.auth?.accessToken;

const specialityApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSpecialty: builder.query({
      query: (id) => ({
        url: `/api/v1/speciality`,
        method: "GET",
      }),
      invalidatesTags: ["Specialty"],
    }),
    getAllSpecialtyByDoctor: builder.query({
      query: (id) => ({
        url: `/api/v1/speciality/doctor/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["Specialty"],
    }),
    getAllSubSpeciality: builder.query({
      query: (id) => ({
        url: `/api/v1/sub_speciality`,
        method: "GET",
      }),
      invalidatesTags: ["Speciality"],
    }),
    getAllSubSpecialityByDoctor: builder.query({
      query: (id) => ({
        url: `/api/v1/services/doctor/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["Specialty"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAllSpecialtyQuery,
  useGetAllSpecialtyByDoctorQuery,
  useGetAllSubSpecialityQuery,
  useGetAllSubSpecialityByDoctorQuery,
} = specialityApi;
export default specialityApi;
